<template>
  <header>
    <h1>{{title}}</h1>
    <ul>
      <li v-for= "contact in contacts"
          :key = "contact.number">
        {{contact.name}}: {{contact.number}}
        <br>
        {{contact.email}}
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Contact Book",
      contacts: [
        {
          name: "Darrell",
          number: "1-677-444-4449",
          email: "darrellwjr.com@gmail.com",
        },
        {
          name: "tamia",
          number: "1-634-564-4949",
          email: "darrellwjr.com@gmail.com",
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

