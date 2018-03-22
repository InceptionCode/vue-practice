export default {
  computed: {
    nameInput : {
      get: function () {
        const {nameInput} = this.$store.state;
        return nameInput
      },
      set: function (nameInput) {
        return nameInput;
      }
    },
    numberInput () {
      return this.$store.state.numberInput;
    },
    emailInput () {
      return this.$store.state.emailInput;
    },
    isFavorite () {
      return this.$store.state.isFavorite;
    }
  }
}