<template>
<div>
  <div class="favorites-title-wrapper">
    <h2>Favorites</h2>
    <h3 class="contact-amount">Amount of favorites: {{amountOfFavorites}}</h3>
  </div>
  <ul>
    <li v-for="contact in contactList"
    :key="contact.id">
      <strong>{{contact.name}}</strong>: 
      {{contact.number}}
      <span>{{contact.email}}</span>
      <span class="edit-button"
          @click= "commitEdit(contact.id)">edit</span>
      <i class="fa-times"
        @click = "deleteThisContact(contact.id)">
        x
      </i>
    </li>
  </ul>
</div>
</template>

<script>
import methods from '../mixins/methods'

export default {
  props: ['contacts'],
  computed: {
    contactList () {
      this.$store.getters.setFavorites
      return this.$store.state.favoritesList;
    },
    amountOfFavorites () {
      return this.$store.getters.favoritesAmount;
    }
  },
  mixins: [methods],
  methods: {
    commitDelete (newContacts,newFavList) {
      const {commit} = this.$store;
      commit({
        type: "deleteContact",
        newContacts,
        newFavList
      })
    },
    commitEdit (editID) {
      const {commit} = this.$store;
      const {contacts,favoritesList} = this.$store.state;

      let favoritesContacts = 
              favoritesList.filter(contact => contact.id !== editID);

      let newContacts = contacts.filter(contact => contact.id !== editID);

      this.populateForm(editID);
      commit({
        type: 'editContact',
        favoritesContacts,
        editID: '',
        contacts: newContacts,
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

