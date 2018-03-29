<template>
  <div>
    <nav>
      <li v-for="route in routes" 
          :key="route.name"
          class="nav-li">
        <nuxt-link :to="route.link">{{route.name}}</nuxt-link>
      </li>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          link: "/",
          name: "home"
        },
        {
          link: "/app",
          name: "App Page"
        }
      ]
    }
  }
}
</script>