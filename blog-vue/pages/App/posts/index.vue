<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Posts</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <app-feature-section :featurePreview="featurePreview" 
     />
    <h1 class="section-title">All posts</h1>
    <app-posts-section :postPreview="postPreview" 
    />
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import featurePreviewData from '@/assets/mixins/feature-preview'
import postPreviewData from '@/assets/mixins/post-preview'
import AppNav from '@/components/global/AppNav'
import AppFeatureSection from '@/components/home/AppFeatureSection'
import AppPostsSection from '@/components/posts/AppPostsSection'


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
    "app-feature-section": AppFeatureSection,
    "app-posts-section": AppPostsSection
  },
  mixins: [navData,featurePreviewData,postPreviewData],
}
</script>

