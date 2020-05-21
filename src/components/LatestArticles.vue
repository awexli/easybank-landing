<template>
  <div class="articles">
    <div class="articles__title-wrapper pd-arch">
      <h2 class="articles__title --title">Latest Articles</h2>
    </div>
    <div class="articles__card-wrapper card-struct">
      <div class="articles__card" v-for="card in cards" v-bind:key="card.title">
        <div class="articles__img-container">
          <img v-bind:src="card.img" v-bind:alt="card.alt" class="articles__card-image" />
        </div>
        <div class="articles__card-bot">
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
            "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
          img: require("../assets/image/image-currency.jpg"),
          alt: "Photo of currency in a pile"
        },
        {
          author: "Wilson Hutton",
          title: "Treat yourself without worrying about money",
          desc:
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
          img: require("../assets/image/image-restaurant.jpg"),
          alt: "Photo of a restaurant dish"
        },
        {
          author: "Wilson Hutton",
          title: "Take your Easybank card wherever you go",
          desc:
            "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
          img: require("../assets/image/image-plane.jpg"),
          alt: "Photo of a plane's wing"
        },
        {
          author: "Claire Robinson",
          title: "Our invite-only Beta accounts are now live!",
          desc:
            "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
          img: require("../assets/image/image-confetti.jpg"),
          alt: "Photo of confetti"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.articles {
  &__card {
    display: flex; // consistent img height
    flex-direction: column; // consistent img height
    margin-bottom: 2em;
    border: 1px solid white;
    border-radius: 5px;
  }

  &__title-wrapper {
    @media screen and (min-width: 600px) {
      text-align: start;
    }
  }

  &__img-container {
    flex: 1; // consistent img height
  }

  &__card-image {
    //--- consistent img height
    width: 100%;
    height: 100%;
    vertical-align: middle;
    //--- consistent img height
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &__card-bot {
    text-align: start;
    padding: 1em;
    background: $white;
  }

  &__card-author {
    font-size: 11px;
    color: $gray-blue;
    margin-bottom: 1em;
  }

  &__card-title {
    font-size: 1em;
    margin-bottom: 8px;
  }

  &__card-sub {
    padding: 0;
    font-size: 13px;
    //--- important
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    //--- important
  }
}
</style>
