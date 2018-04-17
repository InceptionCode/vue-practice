import Vuex from 'vuex'
import axios from 'axios'

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
      nuxtServerInit({commit},{error}) {
        return (
          axios.get(process.env.baseUrl + 'posts.json')
              .then(payload => {
                const loadedPosts = [];
                for (const key in payload.data) {
                  loadedPosts.push({...payload.data[key], id: key});
                }
                commit('setPosts',loadedPosts)
              })
              .catch(e => error(e))
        );
      },
      addPosts({commit}, posts) {
        axios.post(process.env.baseUrl + 'posts.json', posts)
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
        axios.put(process.env.baseUrl + 'posts' + `/${id}.json`, postData)
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