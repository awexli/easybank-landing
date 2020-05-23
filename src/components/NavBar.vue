<template>
  <div class="nav-bar">
    <img v-bind:src="logo" alt="easybank logo" />
    <button type="button" aria-label="menu" class="nav-bar__btn">
      <div class="nav-bar__burger"></div>
    </button>
    <NavMenu />
    <button class="request-btn" type="button">{{ requestBtn }}</button>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: "NavBar",
  components: {
    NavMenu
  },
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 1em;
  height: 64px;
  position: fixed;
  width: inherit;
  max-width: inherit;
  top: 0;
  overflow: hidden;
  z-index: 10;

  @media screen and (min-width: 768px) {
    height: 80px;
    padding: 0 2em;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 5em;
  }

  &__btn {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    outline: none;
    position: relative;
    background: transparent;
    transition: all 0.1s ease-in-out;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &__burger {
    width: 20px;
    height: 2px;
    position: relative;
    background: black;
    transition: all 0.1s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 2px;
      background: black;
      transition: all 0.1s ease-in-out;
    }

    &::before {
      transform: translate(-10px, -5px);
    }

    &::after {
      transform: translate(-10px, 5px);
    }

    &.active {
      transform: translateX(-1px);
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(-6px, 6px);
      }

      &::after {
        transform: rotate(-45deg) translate(-6px, -6px);
      }
    }
  }
}

.request-btn {
  @media screen and (min-width: 1024px) {
    display: block;
  }
}
</style>
