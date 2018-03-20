<template>
  <div>
    <p>length of contacts: {{contactLength}}</p>
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
      return this.$store.state.contacts
    },
    contactLength () {
      return this.$store.getters.contactLength;
    }
  },
}
</script>

