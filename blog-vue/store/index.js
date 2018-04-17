import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {},
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPosts(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, post) {
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
      addPosts({commit}, posts) {
        this.$axios.$post('posts.json', posts)
          .then(res => {
            commit('addPosts',{...posts, id: res.id});
            this.$router.push("/App/admin");
          })
          .catch(error => {
            console.log(error);
          });
      },
      editPost({commit}, postPayload) {
        const {id, postData} = postPayload;
        this.$axios.$put('posts' + `/${id}.json`, postData)
          .then(payload => {
            commit('editPost', postData);
            this.$router.push('/App/admin');
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default Store