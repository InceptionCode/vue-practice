<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Admin: New Post</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <section class="new-post">
      <app-admin-form @savePost="submitPost"/>
    </section>
    <section class="existing-post">
      <h1 class ="section-title">Existing Post</h1>
      <app-posts-section :postPreview="loadedPosts"
        :is-admin="true" 
      />
    </section>
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import AppNav from '@/components/global/AppNav'
import AppAdminForm from '@/components/admin/AppAdminForm'
import AppPostsSection from '@/components/posts/AppPostsSection'

import axios from 'axios'
import moment from 'moment'

export default {
 layout: "nav",
 components: {
   'app-nav': AppNav,
   'app-posts-section': AppPostsSection,
   'app-admin-form': AppAdminForm
 },
 mixins: [navData],
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    submitPost(postData) {
      axios.post('https://blog-vue-97.firebaseio.com/posts.json', postData)
        .then(result => {
          this.$store.dispatch('updatePosts',postData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancelPost () {
      this.$router.push('/App/admin');
    }
  }
}
/*
Soon to implement: Send user to success page if succesful or to the failed page if form couldn't be submitted.

this.$router.push('../successful-form');
this.$router.push('../error-form');
*/
</script>

