<template>
  <div class="mid">
    <div class="mid__top pd-arch">
      <h2 class="mid__top-title --title">
        <span>Why choose</span>
        <span>Easybank?</span>
      </h2>
      <p class="mid__top-description --sub">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
    <div class="mid__bot card-struct">
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
  background-color: $light-gray-blue;
  width: 100%;
  position: relative;
  z-index: 1;

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
    padding-bottom: 1rem;
  }

  &__card-title {
    margin: 1em 0;
  }

  &__card-description {
    margin-bottom: 2em;
  }
}
</style>
