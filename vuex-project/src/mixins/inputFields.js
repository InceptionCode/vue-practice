export default {
  computed: {
    nameInput () {
      const {nameInput} = this.$store.state;
      return nameInput
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