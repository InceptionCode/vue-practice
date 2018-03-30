<template>
  <div>
    <img src="../assets/media/error.jpg" alt="">
    <h1 class="error-type">404</h1>
    <h1>
      Ooppss! You have came to the wrong place.
    </h1>
    <p>
      If you are lost here is a way back home to...
      <stong> 
        <nuxt-link to="/"> Safe Ground </nuxt-link>
      </stong>
    </p>
  </div>
</template>

<style scoped>
  div {
    width: 75%;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  img {
    width: 100%;
    height: auto;
  }
  .error-type {
    font-size: 15em;
    letter-spacing: 2.5px;
  }
  p {
    font-size: 18px;
  }
  a {
    display: inline-block;
    background: #000;
    color: white;
    border: none;
    outline: none;
    text-decoration: none;
    letter-spacing: 2px;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    border: 3px solid black;
    background: white;
    color: black;
    transform: scale(1.06);
  }
</style>

