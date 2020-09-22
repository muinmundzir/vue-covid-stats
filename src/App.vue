<template>
  <div id="app">
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
