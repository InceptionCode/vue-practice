import axios from 'axios'
import { authInstance } from '@/src/main'

export const state = {
  currentUser: getSavedState('auth.currentUser'),
}

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue
    saveState('auth.currentUser', newValue)
    setDefaultAuthHeaders(state)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state)
    // dispatch('validate')
  },

  // Logs in the current user.
  logIn({ commit, dispatch, getters }, user = {}) {
    if (getters.loggedIn) return dispatch('validate')
    commit('SET_CURRENT_USER', user)
  },

  // Logs out the current user.
  async logOut({ commit }) {
    debugger
    const sign = await authInstance().signOut()
    console.log(sign)
    commit('SET_CURRENT_USER', null)
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    debugger
    if (!state.currentUser) return Promise.resolve(null)
    return Promise.resolve(state.currentUser)
    // return axios
    //   .get('/api/session')
    //   .then((response) => {
    //     const user = response.data
    //     commit('SET_CURRENT_USER', user)
    //     return user
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status === 401) {
    //       commit('SET_CURRENT_USER', null)
    //     } else {
    //       console.warn(error)
    //     }
    //     return null
    //   })
  },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser.token
    : ''
}
