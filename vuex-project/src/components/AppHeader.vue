<template>
  <header>
    <h1>Little Black Book</h1>
    <h3>Contact book that does it all.</h3>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    display: flex;
    flex-direction: column;
    height: 150px;
    box-shadow: 2px 5px 3px rgba(50,205,50,0.4);
    border-radius: 5px;
  }
  h1 {
    color: limegreen;
  }
  h3 {
    color: limegreen;
  }
</style>
