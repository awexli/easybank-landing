<template>
  <div id="app">
    <NavBar :requestBtn="requestText" />
    <main>
      <IntroSection :requestBtn="requestText" />
      <MidSection />
      <LatestArticles />
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
import FooterAttribute from "@/components/FooterAttribute.vue";

export default {
  name: "App",
  components: {
    NavBar,
    IntroSection,
    MidSection,
    LatestArticles,
    FooterAttribute
  },
  data: function() {
    return {
      requestText: "Request Invite"
    };
  }
};
</script>

<style lang="scss"></style>
