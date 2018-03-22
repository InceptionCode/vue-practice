export default {
  methods: {
    deleteThisContact (id) {
      const {contacts, favoritesList} = this.$store.state;
      const newFavList = favoritesList.filter(contact => {
        return contact.id !== id;
      });
      const newContacts = contacts.filter(contact => {
        return contact.id !== id;
      });
      
      return this.commitDelete(newContacts,newFavList);
    },
    populateForm(editID) {
      const {contacts} = this.$store.state;
      let editContact = contacts.filter(contact => contact.id === editID);

      const [fields] = editContact;
      const {commit} = this.$store;
      commit({
        type: 'changeFormState',
        full: true,
        fields: 'populated',
        setFields: fields
      });
    },
  }
}