import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

(function() {
  // let isMobileMenuOpen = false;
  const overlay = document.querySelector(".overlay");
  const burger = document.querySelector(".nav-bar__burger");

  // const openMenu = () => {
  //   overlay.style.visibility = "visible";
  //   overlay.style.opacity = "100%";
  //   isMobileMenuOpen = true;
  // };

  // const closeMenu = () => {
  //   overlay.style.visibility = "hidden";
  //   overlay.style.opacity = "0%";
  //   isMobileMenuOpen = false;
  // };

  document.querySelector(".nav-bar__btn").addEventListener("click", () => {
    // if (!isMobileMenuOpen) {
    //   openMenu();
    // } else {
    //   closeMenu();
    // }
    overlay.classList.toggle("active");
    burger.classList.toggle("active");
  });
})();
