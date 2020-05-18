<template>
  <div class="intro">
    <div class="intro__right">
      <img src="../assets/image/image-mockups.png" alt="Mockups" class="intro__mock" />
    </div>
    <div class="intro__left">
      <h1 class="intro__title --title">Next generation digital banking</h1>
      <p class="intro__description --sub">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button class="request-btn" type="button">{{ requestBtn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroSection",
  props: {
    requestBtn: {
      type: String,
      required: true,
      default: "Request Invite"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.intro {
  padding-bottom: 80px;
  @media screen and (min-width: 1024px) {
    display: flex;
    padding-bottom: 0;
  }

  &__right {
    background: url(../assets/bg/bg-intro-mobile.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    width: 100%;
    order: 1;

    @media screen and (min-width: 1024px) {
      position: relative;
    }
  }

  &__mock {
    position: relative;
    top: -60px;
    left: 0;
    max-width: 100%;
    min-height: 459px;

    @media screen and (max-width: 320px) {
      min-height: initial;
    }

    @media screen and (min-width: 470px) and (max-width: 767px) {
      max-height: 580px;
    }

    @media screen and (min-width: 768px) {
      max-height: 720px;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90%;
    padding-left: 5%;
    padding-right: 5%;
    order: 0;

    @media screen and (max-width: 320px) {
      padding-left: 1em;
      padding-right: 1em;
    }

    @media screen and (min-width: 580px) and (max-width: 767px) {
      padding-top: 80%;
    }

    @media screen and (min-width: 768px) {
      padding-top: 75%;
      padding-left: 15%;
      padding-right: 15%;
    }

    @media screen and (min-width: 1024px) {
      padding: 0;
    }
  }

  &__description {
    margin-top: 1.5em;

    @media screen and (max-width: 320px) {
      text-align: justify;
    }
  }
}

.request-btn {
  margin-top: 2em;
  font-weight: 600;
  display: block;
}
</style>
