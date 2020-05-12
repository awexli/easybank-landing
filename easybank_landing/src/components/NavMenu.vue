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
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5));
  opacity: 0%;
  visibility: hidden;
  z-index: -1;
  transition: ease 0.3s;

  &.active {
    opacity: 100%;
    visibility: visible;
    z-index: 1;
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
  }

  &__link {
    list-style: none;
    padding: 1em;

    a {
      color: hsl(233, 26%, 24%);
      text-decoration: none;
      padding: inherit;
    }
  }
}
</style>
