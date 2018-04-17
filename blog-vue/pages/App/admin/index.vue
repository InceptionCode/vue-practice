<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Admin</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <section class="add-post">
      <button @click="$router.push('admin/new-post')">Create Post</button>
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

export default {
  layout: "nav",
  components: {
   'app-nav': AppNav,
  },
  mixins: [navData],
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts;
    }
  },
}
</script>

