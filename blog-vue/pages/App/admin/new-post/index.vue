<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Admin: New Post</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <section class="new-post">
      <app-admin-form />
    </section>
    <section class="existing-post">
      <h1 class ="section-title">Existing Post</h1>
      <app-posts-section :postPreview="postPreview"
        :is-admin="true" 
      />
    </section>
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import postPreviewData from '@/assets/mixins/post-preview'
import AppNav from '@/components/global/AppNav'
import AppAdminForm from '@/components/admin/AppAdminForm'
import AppPostsSection from '@/components/posts/AppPostsSection'

export default {
 layout: "nav",
 components: {
   'app-nav': AppNav,
   'app-posts-section': AppPostsSection,
   'app-admin-form': AppAdminForm
 },
 mixins: [navData, postPreviewData],
 data() {
    return {
      editPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    savePost() {
      console.log(this.editPost);
    },
    cancelPost () {
      this.$router.push('/App/admin');
    }
  }
}
</script>

