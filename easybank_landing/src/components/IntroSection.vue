<template>
  <div class="intro">
    <div class="intro__right">
      <div class="intro__mock-container">
        <img src="../assets/image-mockups.png" alt="Mockups" class="intro__mock" />
      </div>
    </div>
    <div class="intro__left">
      <h1 class="intro__title">Next generation digital banking</h1>
      <p class="intro__description">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
    </div>
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
  display: grid;

  &__right {
    background: url(../assets/bg-intro-mobile.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__mock-container {
    position: relative;
  }

  &__mock {
    max-width:100%;
  }

  &__left {
    background-color: wheat;
  }

  &__title {
    position: relative;
  }
}
</style>
