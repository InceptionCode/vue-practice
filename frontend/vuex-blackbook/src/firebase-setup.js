import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.VUE_APP_PROJECT_ID,
}

firebase.initializeApp(firebaseConfig)
export const authInstance = firebase.auth
