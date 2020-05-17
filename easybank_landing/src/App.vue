<template>
  <div id="app">
    <NavBar :requestBtn="requestText" />
    <main>
      <IntroSection :requestBtn="requestText" />
      <attribution />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import IntroSection from "./components/IntroSection.vue";
import attribution from "./components/attribution.vue";

export default {
  name: "App",
  components: {
    NavBar,
    IntroSection,
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
  display: flex;
  justify-content: center;
}

main {
  width: 100%;
}

#app {
  font-family: "Public Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1440px;
  position: relative;
  text-align: center;
}

.request-btn {
  display: none;
  font-family: "Public Sans", sans-serif;
  height: 48px;
  width: 155px;
  border-style: none;
  border-radius: 2em;
  background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  color: hsl(0, 0%, 100%);
  cursor: pointer;
}
</style>
