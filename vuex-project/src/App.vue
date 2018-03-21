<template>
  <div id="app">
    <app-header></app-header>
    <app-contacts></app-contacts>
    <app-favorites></app-favorites>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader"
import AppContacts from "./components/AppContacts"
import AppFavorites from "./components/AppFavorites"
import AppFooter from "./components/AppFooter"

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-contacts': AppContacts,
    'app-footer': AppFooter,
    'app-favorites': AppFavorites
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background: black;
}
</style>
