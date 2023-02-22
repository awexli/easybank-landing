import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

(function() {
  let isMobileMenuOpen = false;
  const overlay = document.querySelector(".overlay");
  const burger = document.querySelector(".nav-bar__burger");

  document.querySelector(".nav-bar__btn").addEventListener("click", () => {
    if (!isMobileMenuOpen) {
      overlay.className += " active";
      burger.className += " active";
      isMobileMenuOpen = true;
    } else {
      overlay.classList.remove("active");
      burger.classList.remove("active");
      isMobileMenuOpen = false;
    }
  });
})();
