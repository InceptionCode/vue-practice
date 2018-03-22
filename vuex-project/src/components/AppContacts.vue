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
      <span class="edit-button"
          @click= "commitEdit(contact.id)">edit</span>
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
        :value = "nameInput" 
        ref = "nameField">
       
      <input type="text" 
        placeholder="Add Contact Number" 
        required
        :value = "numberInput"
        ref = "numberField">
      <input type="email" 
        placeholder="Add Contact Email" 
        required
        :value= "emailInput"
        ref = "emailField">
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
import methods from '../mixins/methods'
import inputFields from '../mixins/inputFields'

export default {
  props: ['contacts'],
  computed: {
    contactList () {
      return this.$store.state.contacts
    },
    contactsAmount () {
      return this.$store.getters.contactLength;
    },
  },
  mixins: [inputFields, methods],
  data () {
    return {
      favoriteState: false
    }
  },
  methods: {
    clearForm() {
      const {commit} = this.$store;
      commit({
        type: 'changeFormState',
        full: true,
        fields: 'empty'
      });
    },
    markAsFavorite(e) {
      const {commit} = this.$store;
      if(e.target.innerHTML === "YES") {
        commit({
          type: 'changeFormState',
          full: false,
          fields: 'fav-yes'
        });
      } else {
          commit({
            type: 'changeFormState',
            full: false,
            fields: 'fav-no'
          });
      }
    },
    addContact() {
      const {commit } = this.$store;
      const {nameField, numberField, emailField} = this.$refs;
      const {isFavorite, editID} = this.$store.state;

      const favorite = (isFavorite ? 'yes' : 'no');
      let contact = {
            id: Math.random(),
            name: nameField.value,
            number: numberField.value,
            email: emailField.value,
            favorite 
          };
      if (editID === '') {
        commit({
          type: 'createContact',
          contact,
        })
      } else {
        console.log(isFavorite)
        const {name, number, email} = contact;
        const editedContactData = {
          id: editID,
          name,
          number,
          email,
          favorite
        };
        commit({
          type: 'createContact',
          contact: editedContactData,
        })
      }
        this.clearForm();
    },
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
        contacts: newContacts,
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
