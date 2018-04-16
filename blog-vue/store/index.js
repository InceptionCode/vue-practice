import Vuex from 'vuex'
import axios from 'axios'

const Store = () => {
  return new Vuex.Store({
    state: {},
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      updatePosts(state, post) {
        state.loadedPosts.push(post);
      }
    },
    actions: {
      nuxtServerInit({commit},{params, error}) {
        return (
          axios.get('https://blog-vue-97.firebaseio.com/posts.json')
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
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      updatePosts({commit}, posts) {
        commit('updatePosts', posts);
      },
      editPost({state,commit}, editedPost) {
        const filteredPosts = state.loadedPosts.filter(post => post.id !== editPost.id);
        const newPosts = filteredPosts.push(editedPost);
        commit('setPosts', newPosts);
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