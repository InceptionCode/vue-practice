<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Posts</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <app-feature-section />
    <h1 class="section-title">All Posts</h1>
    <app-posts-section />
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import AppNav from '@/components/global/AppNav'
import AppFeatureSection from '@/components/home/AppFeatureSection'
import AppPostsSection from '@/components/posts/AppPostsSection'

export default {
 layout: "nav",
 components: {
   'app-feature-section': AppFeatureSection,
   'app-nav': AppNav,
   'app-posts-section': AppPostsSection
 },
 mixins: [navData] 
}
</script>

