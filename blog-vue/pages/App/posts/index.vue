<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Posts</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <h1 class="section-title">All posts</h1>
    <app-posts-section :postPreview="loadedPosts" 
    />
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import featurePreviewData from '@/assets/mixins/feature-preview'
import AppNav from '@/components/global/AppNav'


export default {
  layout: "nav",
  props: { 
      isAdmin: {
        type: Boolean,
        default: false
      } 
  },
  components: {
    "app-nav": AppNav,
  },
  mixins: [navData,featurePreviewData],
  computed: {
    loadedPosts () {
     return this.$store.getters.loadedPosts;
    }
  },
}
</script>

