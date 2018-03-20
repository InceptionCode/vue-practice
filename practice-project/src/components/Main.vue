<template>
  <div>
    <app-header></app-header>
    <contacts :contacts="contacts"></contacts>
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
      contacts: [
        {
          name: "Darrell",
          number: "1-677-444-4449",
          email: "darrellwjr.com@gmail.com",
        },
        {
          name: "tamia",
          number: "1-634-564-4949",
          email: "queenT@fakemail.com",
        },
        {
          name: "Kevin",
          number: "1-627-344-5449",
          email: "kevinfake@fakemail.com",
        }
      ] 
    }
  }
}
</script>

<style scoped>
</style>

