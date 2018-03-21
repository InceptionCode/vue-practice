<template>
  <div id="app">
    <app-header></app-header>
    <app-favorites></app-favorites>
    <div class="showList-wrapper">
      <button v-if= "!showList" 
        class ="show-contacts-button"
        @click="showContacts">
        Show Contacts
      </button>

      <button v-else
        class ="show-contacts-button"
        @click="showContacts">
        Hide Contacts
      </button>
    </div>
    <app-contacts v-if = "showList"></app-contacts>
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
      showList: false
    }
  },
  methods: {
    showContacts () {
      return this.showList = !this.showList
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
.show-contacts-button {
  background: navy;
  color: white;
  border: none;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 10px 0;
  font-size: 18px;
  letter-spacing: 2.5px;
}
.show-contacts-button:hover {
  cursor: pointer;
  outline: none;
  transform: scale(1.02);
}
.show-contacts-button:focus {
  outline: none;
}
.fa-times {
  color: red;
  font-size: 1.5em;
}
.fa-times:hover {
  cursor: pointer;
}
</style>
