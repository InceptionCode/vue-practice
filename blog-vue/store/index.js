import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null;
      },
      addPosts(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post =>{
          return post.id === editedPost.id
        });
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit({commit},{app,error}) {
        return (
          app.$axios.$get('posts.json')
              .then(payload => {
                const loadedPosts = [];
                for (const key in payload) {
                  loadedPosts.push({...payload[key], id: key});
                }
                commit('setPosts',loadedPosts)
              })
              .catch(e => error(e))
        );
      },
      authenticateUser({state,disptch,commit}, authData) {
        let  authURL=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.API_KEY}`;

        if(!authData.isLogin) {
          authURL=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.API_KEY}`;
        }
        this.$axios.$post(authURL, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          localStorage.setItem('token', res.idToken);
          localStorage.setItem('tokenExpiration', new Date().getTime() + res.expiresIn * 1000);
          commit('setToken', res.idToken);
          dispatch('setLogoutTimer', res.expiresIn * 1000);
        })
        .catch(e=> {
          console.log(e)
        })
      },
      setLogoutTimer({commit}, duration) {
        setTimeout(()=>{
          commit('clearToken');
        }, duration)
      },
      initAuth({commit,dispatch}) {
        const token = localStorage.getItem('token');
        const expireDate = localStorage.getItem('tokenExpiration');

        if(new Date().getTime() > +expireDate || !token) {
          return;
        }
        console.log(+expireDate - new Date().getTime())
        dispatch('setLogoutTimer', +expireDate - new Date().getTime())
        commit('setToken', token);
      },
      addPosts({state,commit}, posts) {
        this.$axios.$post(`posts.json?auth=${state.token}`, posts)
          .then(res => {
            commit('addPosts',{...posts, id: res.id});
            this.$router.push("/App/admin");
          })
          .catch(error => {  
            console.log(error);
          });
      },
      editPost({state,commit}, postPayload) {
        const {id, postData} = postPayload;
        this.$axios.$put('posts' + `/${id}.json?auth=${state.token}`, postData)
          .then(payload => {
            commit('editPost', postData);
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default Store