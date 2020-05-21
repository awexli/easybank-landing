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
      // revert everything to default
      background: initial;
      background-repeat: initial;
      background-position: initial;
      background-size: initial;
      position: initial;
      top: initial;
      left: initial;
      right: initial;
      position: relative;
      height: 460px;

      &::before {
        content: url(../assets/bg/bg-intro-desktop.svg);
        width: 100%;
        position: absolute;
        top: -260px;
        left: 0;
        right: 0;
      }
    }

    @media screen and (min-width: 1440px) {
      order: 1;
      width: 87%;
      height: 750px;

      &::before {
        top: -180px;
        left: -20px;
      }
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

    @media screen and (min-width: 1024px) {
      position: absolute;
      top: -19%;
      left: 90px;
      max-height: initial;
      z-index: 2;
    }

    @media screen and (min-width: 1200px) {
      top: -45%;
      left: 110px;
    }

    @media screen and (min-width: 1280px) {
      top: -60%;
      left: 120px;
    }

    @media screen and (min-width: 1440px) {
      top: -40px;
      left: 155px;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 110%;
    padding-left: 5%;
    padding-right: 5%;
    order: 0;

    @media screen and (max-width: 320px) {
      padding-left: 1em;
      padding-right: 1em;
    }

    @media screen and (min-width: 580px) {
      padding-top: 95%;
    }

    @media screen and (min-width: 768px) {
      padding-left: 15%;
      padding-right: 15%;
    }

    @media screen and (min-width: 850px) {
      padding-top: 85%;
    }

    @media screen and (min-width: 1024px) {
      padding: 0 0 0 5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: start;
      width: 70%;
    }

    @media screen and (min-width: 1280px) {
      padding: 80px 0 0 160px;
      width: 65%;
    }
  }

  &__title {
    @media screen and (min-width: 1024px) {
      font-size: 2.5em;
    }

    @media screen and (min-width: 1440px) {
      font-size: 3em;
    }
  }

  &__description {
    margin-top: 1.5em;

    @media screen and (max-width: 320px) {
      text-align: justify;
    }

    @media screen and (min-width: 1440px) {
      font-size: 1em;
      padding-right: 1em;
    }
  }
}

.request-btn {
  margin-top: 2em;
  font-weight: 600;
  display: block;
}
</style>
