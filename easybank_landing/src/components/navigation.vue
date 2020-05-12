<template>
  <div class="nav-bar">
    <img src="../assets/logo.svg" alt="easybank logo" />
    <button type="button" aria-label="menu" class="nav-bar__btn">
      <div class="nav-bar__burger"></div>
    </button>
  </div>
</template>

<script>
export default {
  name: "navigation",
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
  padding: 0 1em;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;

  &__btn {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    //outline: none;
    position: relative;
    background: transparent;
    transition: all 0.1s ease-in-out;
  }

  &__burger {
    width: 16px;
    height: 2px;
    position: relative;
    background: black;
    transition: all 0.1s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 2px;
      background: black;
      transition: all 0.1s ease-in-out;
    }

    &::before {
      transform: translate(-8px, -5px);
    }

    &::after {
      transform: translate(-8px, 5px);
    }
  }
}
</style>
