<template>
  <div class="overlay">
    <div class="nav-bar__menu">
      <ul class="nav-bar__menu-list">
        <li class="nav-bar__link" v-for="page in pages" :key="page.text">
          <a href="#">{{ page.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  data() {
    return {
      pages: [
        { text: "Home" },
        { text: "About" },
        { text: "Contact" },
        { text: "Blog" },
        { text: "Careers" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 64px;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: ease 0.3s;
  z-index: -1;
  background: linear-gradient(hsl(233, 26%, 24%, 1), hsl(220, 16%, 96%, 0.2));

  &.active {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    top: 80px;
  }

  @media screen and (min-width: 1024px) {
    visibility: visible;
    opacity: 1;
    background: initial;
    position: initial;
    top: initial;
    left: initial;
    z-index: initial;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.nav-bar {
  &__menu {
    position: relative;
    overflow-y: hidden;
    background: white;
    padding: 1em 0;
    margin: 1em;
    border-radius: 8px;

    @media screen and (min-width: 1024px) {
      padding: 0;
      margin: 0;
    }
  }

  &__menu-list {
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: center;
    }
  }

  &__link {
    list-style: none;
    padding: 1em;

    @media screen and (min-width: 1024px) {
      font-size: 15px;
      padding: 8px;
    }

    a {
      color: hsl(233, 26%, 24%);
      text-decoration: none;
      padding: inherit;
    }
  }
}
</style>
