<template>
  <div class="mid">
    <div class="mid__top">
      <h2 class="mid__top-title --title">
        <span>Why choose</span>
        <span>Easybank?</span>
      </h2>
      <p class="mid__top-description --sub">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
    <div class="mid__bot">
      <div class="mid__card" v-for="card in cards" v-bind:key="card.title">
        <img v-bind:src="card.icon" v-bind:alt="card.alt" class="mid__card-icon" />
        <h3 class="mid__card-title --title">{{ card.title }}</h3>
        <p class="mid__card-description --sub">{{ card.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MidSection",
  data() {
    return {
      cards: [
        {
          title: "Online Banking",
          desc:
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
          icon: require("../assets/icon/icon-online.svg"),
          alt: "Online Banking Icon"
        },
        {
          title: "Simple Budgeting",
          desc:
            "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
          icon: require("../assets/icon/icon-budgeting.svg"),
          alt: "Simple Budgeting Icon"
        },
        {
          title: "Fast Onboarding",
          desc:
            "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
          icon: require("../assets/icon/icon-onboarding.svg"),
          alt: "Fast Onboarding Icon"
        },
        {
          title: "Open API",
          desc:
            "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
          icon: require("../assets/icon/icon-api.svg"),
          alt: "Open API"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.mid {
  width: 100%;
  background-color: $light-gray-blue;

  &__top {
    padding: 2em 2em 0 2em;

    @media screen and (min-width: 768px) {
      padding: 5em 5em 0 5em;
    }

    @media screen and (min-width: 1280px) {
      padding: 110px 160px 0 160px;
    }
  }

  &__top-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6em;

    @media screen and (min-width: 768px) {
      flex-direction: row;

      span:first-of-type {
        padding-right: 8px;
      }
    }
  }

  &__top-description {
    margin-top: 1em;

    @media screen and (min-width: 768px) {
      text-align: start;
      width: 550px;
    }
  }

  &__bot {
    margin-top: 3em;
    padding: 0 2em 0 2em;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2em;
      text-align: justify;
      padding: 0 5em 0 5em;
    }

    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 2.5em;
      padding: 0 160px 0 160px;
      text-align: start;
    }
  }

  &__card-title {
    margin: 1em 0;
  }

  &__card-description {
    margin-bottom: 2em;
  }
}
</style>
