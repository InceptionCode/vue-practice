<template>
  <div id="blog-home">
    <Nav :routes="routes"></Nav>
    <h1>Hello App</h1>
    <p>Testing....</p>
    <p>routing</p>
  </div>
</template>

<script>
import Routes from '~/assets/mixins/routes'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  mixins: [Routes]  
}
</script>


