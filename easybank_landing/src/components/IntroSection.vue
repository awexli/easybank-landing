<template>
  <div class="intro">
    <img src="../assets/bg-intro-mobile.svg" alt="Background intro" class="intro__bg" />
    <h1 class="intro__title">Next generation digital banking</h1>
    <p class="intro__description">
      Take your financial life online. Your Easybank account will be a
      one-stop-shop for spending, saving, budgeting, investing, and much more.
    </p>
  </div>
</template>

<script>
export default {
  name: "IntroSection",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.intro {
  &__bg {
    position: relative;
    width: 100%;
  }

  &__title {
    position: relative;
  }
}
</style>
