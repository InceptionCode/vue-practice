<template>
  <div id="app">
    <a id= "project-link" href = "#practice-project">Practice Project</a>
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br>
    <Main id="practice-project" >
    </Main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#project-link {
  display: block;
  background: black;
  margin: auto;
  padding: 40px 0;
  color: limegreen;
  text-decoration: none;
  font-size: 18px;
}

#practice-project {
  padding-top: 85vh;
}
</style>
