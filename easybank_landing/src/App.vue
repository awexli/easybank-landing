<template>
  <div id="app">
    <NavBar :requestBtn="requestText" />
    <attribution />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import attribution from "./components/attribution.vue";

export default {
  name: "App",
  components: {
    NavBar,
    attribution
  },
  data: function() {
    return {
      requestText: "Request Invite"
    };
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
}

body {
  font-size: 18px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
