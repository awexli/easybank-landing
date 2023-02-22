/* eslint-disable no-trailing-spaces */ /* eslint-disable no-trailing-spaces */
<template>
  <footer class="footer">
    <div class="footer__group-one">
      <img v-bind:src="logo" alt="easybank logo" class="footer__logo" />
      <div class="footer__social-container">
        <img
          v-for="icon in icons"
          v-bind:key="icon.name"
          v-bind:src="icon.src"
          v-bind:alt="icon.alt"
          class="footer__social-icon"
        />
      </div>
    </div>
    <div class="footer__group-two">
      <ul class="footer__list">
        <li
          class="footer__list-item"
          v-for="link in linkGroupOne"
          v-bind:key="link.name"
        >
          <a href="#" class="footer__list-link">
            {{ link.name }}
          </a>
        </li>
      </ul>
      <ul class="footer__list">
        <li
          class="footer__list-item"
          v-for="link in linkGroupTwo"
          v-bind:key="link.name"
        >
          <a href="#" class="footer__list-link">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__group-three">
      <button class="footer__btn request-btn">{{ requestBtn }}</button>
      <p class="footer__copyright">© Easybank. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMain",
  props: {
    requestBtn: {
      type: String,
      required: true,
      default: "Request Invite"
    },
    logo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      icons: [
        {
          name: "facebook",
          src: require("../assets/icon/icon-facebook.svg"),
          alt: "facebook icon"
        },
        {
          name: "youtube",
          src: require("../assets/icon/icon-youtube.svg"),
          alt: "youtube icon"
        },
        {
          name: "twitter",
          src: require("../assets/icon/icon-twitter.svg"),
          alt: "twitter icon"
        },
        {
          name: "pinterest",
          src: require("../assets/icon/icon-pinterest.svg"),
          alt: "pinterest icon"
        },
        {
          name: "instagram",
          src: require("../assets/icon/icon-instagram.svg"),
          alt: "instagram icon"
        }
      ],
      linkGroupOne: [
        { name: "About Us" },
        { name: "Blog" },
        { name: "Contact" }
      ],
      linkGroupTwo: [
        { name: "Careers" },
        { name: "Support" },
        { name: "Privacy Policy" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-row-gap: 1em;
  padding: 3rem 0;
  background-color: $dark-blue;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "groupOne groupOne"
      "groupTwo groupThree";
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "groupOne groupTwo . groupThree";
    padding: 3rem 5em 3rem 5em;
  }

  @media screen and (min-width: 1440px) {
    padding: 3rem 160px 3rem 160px;
  }

  &__group-one {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-around;
      grid-area: groupOne;
    }

    @media screen and (min-width: 1200px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__group-two {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-evenly;
      text-align: start;
    }

    @media screen and (min-width: 1200px) {
      display: grid;
      grid-area: groupTwo;
      grid-template-columns: 1fr 1fr;
    }
  }

  &__group-three {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      justify-content: center;
    }

    @media screen and (min-width: 1200px) {
      grid-area: groupThree;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  &__logo {
    padding-bottom: 1.5rem;
  }

  &__social-icon {
    padding: 0 8px;

    &:hover {
      cursor: pointer;
      filter: invert(19%) sepia(11%) saturate(5794%) hue-rotate(94deg)
        brightness(99%) contrast(59%);
    }
  }

  &__list {
    list-style: none;
  }

  &__list-item {
    padding: 1rem;

    @media screen and (min-width: 1200px) {
      padding: 0 0 1em 0;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }

  &__list-link {
    color: $light-gray-blue;
    text-decoration: none;
    font-size: 15px;
    &:hover {
      cursor: pointer;
      color: #33ca97;
    }
  }

  &__copyright {
    color: $gray-blue;
    font-size: 15px;
    margin-top: 1.5rem;
  }
}

.request-btn {
  display: block;
}
</style>
