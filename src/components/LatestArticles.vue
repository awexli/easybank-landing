<template>
  <div class="articles">
    <div class="articles__title-wrapper">
      <h2 class="articles__title --title">Latest Articles</h2>
    </div>
    <div class="articles__card-wrapper">
      <div class="articles__card">
        <img src alt class="articles__card-image" />
        <div class="articles__card-bot" v-for="card in cards" v-bind:key="card.title">
          <p class="articles__card-author">By {{ card.author }}</p>
          <h3 class="articles__card-title --title">{{ card.title }}</h3>
          <p class="articles__card-sub --sub">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestArticles",
  data() {
    return {
      cards: [
        {
          author: "Claire Robinson",
          title: "Receive money in any currency with no fees",
          desc:
            "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
          author: "Wilson Hutton",
          title: "Treat yourself without worrying about money",
          desc:
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
          author: "Wilson Hutton",
          title: "Take your Easybank card wherever you go",
          desc:
            "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
          author: "Claire Robinson",
          title: "Our invite-only Beta accounts are now live!",
          desc:
            "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
