<template>
  <div id="blog-home">
    <header class="app-header">
      <h1 class="header-h1">Blog Vue</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <app-feature-section :featurePreview="featurePreview"/>
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import featurePreviewData from '@/assets/mixins/feature-preview'
import AppNav from "@/components/global/AppNav"
import AppFeatureSection from "@/components/home/AppFeatureSection"

export default {
  layout: "nav",
  components: {
    "app-nav": AppNav,
    "app-feature-section": AppFeatureSection
  },
  mixins: [navData,featurePreviewData],
}
</script>


