<template>
  <div id="blog-home">
    <header class="app-header">
      <h1 class="header-h1">Blog Vue</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <app-feature-section />
  </div>
</template>

<script>
import AppNav from "../../components/AppNav"
import AppFeatureSection from "../../components/AppFeatureSection"

export default {
  layout: "nav",
  components: {
    "app-nav": AppNav,
    "app-feature-section": AppFeatureSection
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "About",
          ref: "/App/about"
        },
        {
          id: 2,
          name: "posts",
          ref: "/App/posts"
        }
      ]
    }
  }
}
</script>


