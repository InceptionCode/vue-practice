<template>
  <div>
    <app-header></app-header>
    <contacts></contacts>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './Header.vue';
import Contacts from './Contacts.vue';
import Footer from './Footer.vue';

export default {
  components: {
    'app-header': Header,
    'contacts': Contacts,
    'app-footer': Footer
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>

