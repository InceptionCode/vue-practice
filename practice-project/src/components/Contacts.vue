<template>
  <div>
    <h1>{{title}}</h1>
    <form @keyup.prevent.enter="addContact">
      <label>Add Name</label>
      <input type="text" 
      v-model = "inputName">
      <label>Add Number</label>
      <input type="text"
      v-model = "inputNumber">
      <label>Add Email</label>
      <input type="email"
      v-model = "inputEmail">
    </form>
    <ul>
      <li v-for= "contact in contactList"
          :key = "contact.number">
        {{contact.name}}: {{contact.number}}
        <br>
        {{contact.email}}
        <span @click="deleteContact(contact.number)">X</span>
      </li>
    </ul>
    <button @click="addContact">Add Contact</button>
  </div>
</template>

<script>
export default {
  props: ['contacts'],
  data() {
    return {
      title: "Contact Book",
      contactList: this.contacts,
      inputName: '',
      inputNumber: '',
      inputEmail: '' 
    }
  },
  methods: {
    resetInputs: function () {
      this.inputName = '';
      this.inputNumber = '';
      this.inputEmail= '';
    },
    addContact: function () {
      this.contactList.push({
        name: this.inputName,
        number: this.inputNumber,
        email: this.inputEmail
      });
      this.resetInputs();
    },
    deleteContact: function(key) {
      let filterContacts = this.contactList.filter(contact => contact.number !== key);
      this.contactList = filterContacts;
    }
  }
}
</script>

<style scoped>
</style>

