<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="subtitle">Hello, World!</h2>
        <h1 class="title">I'm Hjalte Daniel Hansen</h1>
        <figure class="image is-128x128 container">
          <img src="@/assets/profile.jpg" class="is-rounded" />
        </figure>
      </div>
      <div class="buttons">
        <a class="button is-light" href="https://github.com/hjaltedaniel/">
          <i class="fab fa-github"></i>
          Github
        </a>
        <a class="button is-light" href="https://www.linkedin.com/in/hjaltedaniel/">
          <i class="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a class="button is-light" href="https://www.instagram.com/hjaltedaniel/">
          <i class="fab fa-instagram"></i>
          Instagram
        </a>
        <a class="button is-light" href="tel:+4521267851">
          <i class="fas fa-phone"></i>
          Call me, maybe?
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
html,
body {
  font-family: "GT Eesti Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  background: #f0f2f4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
i {
  margin-right: 10px;
}
.hero.is-primary {
  background-color: $red !important;
  color: #fff;
}
</style>