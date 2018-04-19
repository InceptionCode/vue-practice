<template>
  <div>
    <form class="auth-form" 
      @submit.prevent="submitAuthForm"
    >
      <div>
        <app-control-input v-model="emailInput"
          label="E-mail Address"
          type="email"
        />
        <app-control-input v-model="passwordInput"
          label="Password"
          type="password"
        />
      </div>
      <app-button type="submit" 
        @click="isLogin = !isLogin"
        :btnValue="isLogin ? 'Sign In' : 'Sign Up'"
      />  
    </form>
    <span @click="isLogin = !isLogin">
      {{isLogin ? 'Switch to Sign Up' : 'Switch to Sign In'}}
    </span>
  </div>
</template>

<script>
export default {
  layout: "nav",
  data() {
    return {
      isLogin: true,
      emailInput: '',
      passwordInput: ''
    }
  },
  methods: {
    submitAuthForm() {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.emailInput,
        password: this.passwordInput
      })
      .then(() => {
        this.$router.push('/app/admin');
      });
    }
  }
}
</script>

