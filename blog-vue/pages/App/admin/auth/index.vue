<template>
  <form action="">
    <label for="">E-mail Address</label>
    <input type="text" :v-model="emailInput">
    <label for="">Password</label>
    <input type="text" :v-model="passwordInput">
    <div v-if="logged">
      <button>Log Out</button>
    </div>
    <div v-else>
      <button>Login</button>
      <button>Signup</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      logged: true,
      emailInput: '',
      passwordInput: ''
    }
  }
}
</script>

