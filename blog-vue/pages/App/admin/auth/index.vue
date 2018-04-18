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
      isLogin: false,
      emailInput: '',
      passwordInput: ''
    }
  },
  methods: {
    submitAuthForm() {
      let  authURL=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.API_KEY}`;

      if(!this.isLogin) {
        authURL=`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.API_KEY}`;
      }
      this.$axios.$post(authURL, {
        email: this.emailInput,
        password: this.passwordInput,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
      })
      .catch(e=> {
        console.log(e)
      })
    }
  }
}
</script>

