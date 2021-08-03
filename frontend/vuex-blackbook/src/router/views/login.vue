<script>
// NOTE: Fix import below
import 'firebaseui/dist/firebaseui.css'
import * as firebaseui from 'firebaseui'

import Layout from '@layouts/main.vue'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'
import { authInstance } from '@/src/firebase-setup'

export default {
  uiConfig: {
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult(authResult) {
        // Handle the result
        const isNewUser = authResult.additionalUserInfo.isNewUser

        if (isNewUser) {
          // Set new user DB & redirect to home
          console.log(authResult.user)
        }
        // Redirect to the originally requested page, or to the home page
        this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
        return false
      },
      signInFailure: function(error) {
        // Some unrecoverable error occurred during sign-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.

        this.tryingToLogIn = false
        this.authError = error
      },
    },
    signInOptions: [
      authInstance.GoogleAuthProvider.PROVIDER_ID,
      authInstance.EmailAuthProvider.PROVIDER_ID,
    ],
  },
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      unsubAuth: null,
      authError: null,
      tryingToLogIn: false,
    }
  },
  mounted() {
    const firebaseUiContainer = document.querySelector(
      '#firebaseui-auth-container'
    )
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(authInstance())

    if (firebaseUiContainer != null)
      ui.start(firebaseUiContainer, this.uiConfig)

    this.unsubAuth = authInstance().onAuthStateChanged((authUser) => {
      this.tryingToLogIn = true
      try {
        if (authUser) {
          const id = `${authUser?.uid}_${authUser?.displayName}`
          const username = authUser?.displayName
          const userId = authUser?.uid
          const email = authUser?.email
          const user = { id, userId, username, email }

          this.logIn(user)
        }

        this.tryingToLogIn = false
        this.authError = null
      } catch (e) {
        this.tryingToLogIn = false
        this.authError = e
        console.error(e)
      }
    })
  },
  beforeDestroy() {
    if (this.unsubAuth) this.unsubAuth()
  },
  methods: {
    ...authMethods,
  },
}
</script>

<template>
  <Layout>
    <div id="firebaseui-auth-container" />
    <p v-if="authError">
      There was an error logging in to your account.
    </p>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.form {
  text-align: center;
}
</style>
