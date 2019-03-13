<template>
  <div>
    <section id="contact" class="hero is-white">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="title is-2 has-text-centered">
              <strong>{{ headline }}</strong>
            </h1>
            <p class="content is-medium" v-html="body"></p>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer has-background-white">
      <div class="content has-text-centered has-text-dark">
        <p>
          <a style="padding-right: 0.5em " target="_blank" :href="linkedin">
            <i class="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a style="padding-right: 0.5em " target="_blank" :href="github">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a style="padding-right: 0.5em " target="_blank" :href="facebook">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a style="padding-right: 0.5em " target="_blank" :href="instagram">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </p>
        <div v-html="copyright"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: [
    "facebook",
    "twitter",
    "github",
    "linkedin",
    "instagram",
    "headline",
    "body",
    "copyright"
  ]
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";

a {
  color: $red;
  &:hover {
    color: $black;
  }
}
</style>