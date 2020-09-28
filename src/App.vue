<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-total-cases></app-total-cases>
  </div>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";
import TotalCases from "./components/TotalCases.vue";

export default {
  name: "App",
  components: {
    appNavbar: Navbar,
    appTotalCases: TotalCases,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #252628;
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
