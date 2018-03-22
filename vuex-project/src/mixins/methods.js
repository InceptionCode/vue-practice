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
  }
}