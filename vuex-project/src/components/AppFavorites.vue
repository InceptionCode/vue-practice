<template>
  <div>
    <p>Amount of favorites: {{AmountOfFavorites}}</p>
    <ul>
      <li v-for="contact in contactList"
      :key="contact.id">
        {{contact.name}}: {{contact.number}} 
        <br>
        <span>{{contact.email}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['contacts'],
  computed: {
    contactList () {
      return this.$store.state.contacts;
    },
    AmountOfFavorites () {
      return this.$store.getters.favoritesAmount;
    }
  },
}
</script>

