<template>
  <div class="attribution">
    Coded by
    <a
      href="https://github.com/awexli/easybank-landing"
      target="_blank"
      rel="noopener"
    >
      Alex Li
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterAttribute"
};
</script>

<style lang="scss" scoped>
.attribution {
  font-size: 11px;
  text-align: center;
  background-color: $dark-blue;
  color: $gray-blue;
}
.attribution a {
  color: $lime-green;
}
</style>
