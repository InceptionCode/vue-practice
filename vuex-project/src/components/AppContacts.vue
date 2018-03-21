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
      </li>
    </ul>
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
}
</script>

<style scoped>
  .contact-title-wrapper {
    border: 3px solid limegreen;
    border-radius: 5px;
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
