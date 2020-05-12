<template>
  <div id="app">
    <navigation />
    <attribution />
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import attribution from "./components/attribution.vue";

export default {
  name: "App",
  components: {
    navigation,
    attribution
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
