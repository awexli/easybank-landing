<template>
  <div id="app">
    <NavBar :requestBtn="requestText" :logo="logo" />
    <main>
      <IntroSection :requestBtn="requestText" />
      <MidSection />
      <LatestArticles />
      <FooterMain :requestBtn="requestText" :logo="logoFooter" />
      <FooterAttribute />
    </main>
  </div>
</template>

<script>
import "@/styles/default.scss";
import NavBar from "@/components/NavBar.vue";
import IntroSection from "@/components/IntroSection.vue";
import MidSection from "@/components/MidSection.vue";
import LatestArticles from "@/components/LatestArticles.vue";
import FooterMain from "@/components/FooterMain.vue";
import FooterAttribute from "@/components/FooterAttribute.vue";

export default {
  name: "App",
  components: {
    NavBar,
    IntroSection,
    MidSection,
    LatestArticles,
    FooterMain,
    FooterAttribute
  },
  data: function() {
    return {
      requestText: "Request Invite",
      logo: require("./assets/logo.svg"),
      logoFooter: require("./assets/logo-footer.svg")
    };
  }
};
</script>

<style lang="scss"></style>
