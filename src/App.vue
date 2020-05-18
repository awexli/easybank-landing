<template>
  <div id="app">
    <NavBar :requestBtn="requestText" />
    <main>
      <IntroSection :requestBtn="requestText" />
      <MidSection />
      <FooterAttribute />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import IntroSection from "./components/IntroSection.vue";
import MidSection from "./components/MidSection.vue";
import FooterAttribute from "./components/FooterAttribute.vue";

export default {
  name: "App",
  components: {
    NavBar,
    IntroSection,
    MidSection,
    FooterAttribute
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
  position: relative;
}

#app {
  font-family: "Public Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1440px;
  position: relative;
  margin: 0 auto;
  overflow-x: hidden;
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

.--title {
  color: $dark-blue;
  font-weight: 400;
}

.--sub {
  font-size: 15px;
  color: $gray-blue;
  line-height: 1.6em;

  @media screen and (min-width: 500px) and (max-width: 767px) {
    padding-left: 20%;
    padding-right: 20%;
  }
}
</style>
