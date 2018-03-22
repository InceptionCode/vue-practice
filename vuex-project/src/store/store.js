import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      contacts: [
        {
          id: Math.random(),
          name: 'Darrell',
          number: '778-787-3222',
          email: 'darrellwjr.com@gmail.com',
          favorite: 'yes'
        },
        {
          id: Math.random(),
          name: 'Tamia',
          number: '987-222-3341',
          email: 'queen@fakemail.com',
          favorite: 'yes'
        },
        {
          id: Math.random(),
          name: 'Frank',
          number: '987-333-5341',
          email: 'frank@fakemail.com',
          favorite: 'no'
        },
        {
          id: Math.random(),
          name: 'Steve',
          number: '985-454-5341',
          email: 'frank@fakemail.com',
          favorite: 'no'
        }
      ],
      favoritesList: [],
      editID: '',
      showList: false,
      nameInput: '',
      numberInput: '',
      emailInput: '',
      isFavorite: false
  },
  getters: {
    contactLength: state => state.contacts.length,
    setFavorites: state => {
      let favArray = state.contacts.map(contact =>{
        if (contact.favorite === 'yes') {
            return contact
        }
      });
      state.favoritesList = favArray.filter(favs => favs !== undefined);
    },
    favoritesAmount: state => {
      return state.favoritesList.length;
    }
  },
  mutations: {
    showFullList (state) {
      state.showList = !state.showList
    },
    changeFormState (state, payload) {
      const {full, fields} = payload;
      if (full && fields === "empty") {
        state.nameInput = '';
        state.numberInput = '';
        state.emailInput = '';
        state.isFavorite = false;
      }else if (!full && fields === "fav-yes") {
        state.isFavorite = true;
      } else if (!full && fields === "fav-no") {
        state.isFavorite = false;
      } else {
        const {name, number, email, favorite} = payload.setFields;
        const isFavorite = (favorite === "yes" ? true : false);

        state.nameInput = name;
        state.numberInput = number;
        state.emailInput = email;
        state.isFavorite = isFavorite;
      }
    },
    createContact (state, payload) {
      const {name, number, email, favorite} = payload.contact;
        state.editID = '';
        state.contacts.push(payload.contact);
        state.nameInput = name;
        state.numberInput = number;
        state.emailInput = email;
        state.isFavorite = favorite;
    },
    deleteContact(state, payload) {
      if (payload.newContacts) {
        state.contacts = payload.newContacts;
      }
      state.favoritesList = payload.newFavList;
    },
    editContact(state, payload) {
      state.contacts = payload.contacts;
      state.favoritesList = payload.favoritesContacts;
      state.showList = true;
    }
  }
})
