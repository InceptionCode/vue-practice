<template>
  <nav>
    <li v-for="route in routes" 
        :key="route.name"
        class="nav-li">
      <nuxt-link :to="route.link">{{route.name}}</nuxt-link>
    </li>
  </nav>
</template>

<script>
export default {
  props: ["routes"]
}
</script>
