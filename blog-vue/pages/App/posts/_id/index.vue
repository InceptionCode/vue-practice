<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Post</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <section class="single-post-page">
      <div>
        <img :src="loadedPost.thumbnail" alt="">
        <h1 class ="section-title">{{loadedPost.title}}</h1>
        <div class="post-info">
          <div class="update-info">
            Last updated on {{loadedPost.updatedDate}}
          </div>
          <div class="post-author">
            Written by {{loadedPost.author}}
          </div>
        </div>
        <div class="post-content">
          <p>{{loadedPost.content}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import AppNav from '@/components/global/AppNav'

export default {
  asyncData({params, error}) {
    return new Promise ((resolve,reject)=> {
      setTimeout(()=> {
        resolve({
          loadedPost: {
            id: params.id,
            updatedDate: "April 13th, 2018",
            thumbnail: 'https://goo.gl/SQNvnV',
            title: 'Happy Coding',
            author: "Darrell Washington",
            content: 'Here is the content'
          }
        })
      }, 500)
    })
      .then(data => {
        return data;
      })
      .catch(e => {
        error(new Error())
      })
  },
  layout: "nav",
  components: {
   'app-nav': AppNav,
  },
  mixins: [navData] 
}
</script>
