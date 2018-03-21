<template>
<div>
  <div class="favorites-title-wrapper">
    <h2>Favorites</h2>
    <h3 class="contact-amount">Amount of favorites: {{AmountOfFavorites}}</h3>
  </div>
  <ul>
    <li v-for="contact in contactList"
    :key="contact.id">
      <strong>{{contact.name}}</strong>: 
      {{contact.number}}
      <span>{{contact.email}}</span>
      <i class="fa-times"
        @click = "deleteThisContact(contact.id)">
        x
      </i>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['contacts'],
  computed: {
    contactList () {
      this.$store.getters.setFavorites
      return this.$store.state.favoritesList;
    },
    AmountOfFavorites () {
      return this.$store.getters.favoritesAmount;
    }
  },
  methods: {
    deleteThisContact (id) {
      const {contacts} = this.$store.state;
      const newFavList = this.contactList.filter(contact => {
        return contact.id !== id;
      });
      const newContacts = contacts.filter(contact => {
        return contact.id !== id;
      });
      
      return this.commitDelete(newContacts,newFavList);
    },
    commitDelete (newContacts,newFavList) {
      this.$store.commit({
        type: "deleteContact",
        newContacts,
        newFavList
      })
    }
  }
}
</script>

<style scoped>
  .favorites-title-wrapper {
    background: limegreen;
  }
  .contact-amount {
    background: white;
    color: darkslategray;
    padding: 30px 0;
    margin: 0;
    height: 75px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  h2 {
    text-transform: uppercase;
    letter-spacing: 3.5px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: square;
  }
  ul:after {
    display: table;
    content: '';
    clear: both;
  }
  li {
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 1.5;
    margin: 15px 0;
  }
  strong {
    color: limegreen;
  }
</style>

