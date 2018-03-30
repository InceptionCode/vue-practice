<template>
  <nav class="app-nav">
    <li v-for="tab in tabs"
    :key="tab.id"
    class="nav-tabs">
      <nuxt-link :to="tab.ref">
        {{tab.name}}
      </nuxt-link>
    </li>
  </nav>
</template>

<script>
export default {
  props:['tabs']
}
</script>