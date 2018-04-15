import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: {},
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit({commit},{params, error}) {
        return new Promise ((resolve,reject)=> {
          setTimeout(()=> {
            commit('setPosts',[
              {
                id: 1,
                updatedDate: "April 13th, 2018",
                thumbnail: 'https://goo.gl/SQNvnV',
                title: 'Happy Coding',
                author: "Darrell Washington",
                content: 'Here is the content',
                subContent: 'Here is the sub preview content'
              },
              {
                id: 2,
                updatedDate: "April 13th, 2018",
                thumbnail: 'https://goo.gl/SQNvnV',
                title: 'Happy Coding',
                author: "Darrell Washington",
                content: 'Here is the content',
                subContent: 'Here is the sub preview content'
              },
              {
                id: 3,
                updatedDate: "April 13th, 2018",
                thumbnail: 'https://goo.gl/SQNvnV',
                title: 'Happy Coding',
                author: "Darrell Washington",
                content: 'Here is the content',
                subContent: 'Here is the sub preview content'
              },
              {
                id: 4,
                updatedDate: "April 13th, 2018",
                thumbnail: 'https://goo.gl/SQNvnV',
                title: 'Happy Coding',
                author: "Darrell Washington",
                content: 'Here is the content',
                subContent: 'Here is the sub preview content'
              }
            ]);
            resolve();
          }, 500)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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