<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Post Could Not Be Submitted!!</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <section class="submit-response">
      <img src="@/assets/media/failed.jpeg" alt="">
    </section>
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import AppNav from '@/components/global/AppNav'

export default {
 layout: "nav",
 components: {
   'app-nav': AppNav
 },
 mixins: [navData],
}
</script>
