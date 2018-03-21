<template>
  <div>
    <div class="contact-title-wrapper">
      <h2>Contacts</h2>
      <h3 class="contact-amount">Amount of contacts: {{contactsAmount}}</h3>
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
    <form action="" @submit.prevent="addContact">
      <input type="text" 
        placeholder="Add Contact Name" 
        required
        v-model = "nameInput">
      <input type="text" 
        placeholder="Add Contact Number" 
        required
        v-model = "numberInput">
      <input type="email" 
        placeholder="Add Contact Email" 
        required
        v-model= "emailInput">
      <br>
      <label for="">Mark Contact as a Favorite?</label>
      <button @click.prevent="markAsFavorite($event)">YES</button>
      <button @click.prevent="markAsFavorite($event)">NO</button>
      <br>
      <button class="submitButton">Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['contacts'],
  computed: {
    contactList () {
      return this.$store.state.contacts
    },
    contactsAmount () {
      return this.$store.getters.contactLength;
    }
  },
  data() {
    return {
      nameInput: '',
      numberInput: '',
      emailInput: '',
      isFavorite: false
    }
  },
  methods: {
    clearForm() {
      this.nameInput = '';
      this.numberInput= '';
      this.emailInput = '';
      this.isFavorite = false;
    },
    markAsFavorite(e) {
      if(e.target.innerHTML === "YES") {
        this.isFavorite = 'yes';
      }
    },
    addContact() {
      this.$store.commit({
        type: 'createContact',
        contact: {
          id: Math.random(),
          name: this.nameInput,
          number: this.numberInput,
          email: this.emailInput,
          favorite: this.isFavorite
        }
      })
        this.clearForm();
    },
    deleteThisContact (id) {
      const {favoritesList} = this.$store.state;
      const newContacts = this.contactList.filter(contact => {
        return contact.id !== id;
      });
      const newFavList = favoritesList.filter(contact => {
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
  .contact-title-wrapper {
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
  input {
    margin: 10px;
    padding: 5px 10px;
    outline: none;
    border: none;
    border-bottom: 4px solid navy;
    font-size: 16px;
  }
  label {
    display: block;
    color: limegreen;
    margin-top: 25px;
    letter-spacing: 2px;
    font-size: 18px;
  }

  button {
    background: navy;
    color: white;
    margin: 10px 5px;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
    border: none;
  }
  button:hover {
    cursor: pointer;
    background: limegreen;
    transform: scale(1.08);
  }
</style>
