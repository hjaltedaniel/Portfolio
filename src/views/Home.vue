<template>
  <div>
    <!-- Home Sec -->
    <section id="home" class="hero is-white is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <h1 class="subtitle is-2 has-text-weight-light" v-html="contents.headline"></h1>
              <h3
                class="subtitle is-3 has-text-justified has-text-weight-light"
                v-html="contents.body"
              ></h3>
              <h4 class="subtitle is-4 has-text-weight-light" v-html="contents.byline"></h4>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-2">
              <a
                class="button is-medium is-success"
                target="_blank"
                :href="'https://hjaltes-impartial-elephant.s1.umbraco.io/' + contents.cV"
              >CV</a>
            </div>
            <div class="column is-2">
              <a class="button is-medium is-info" href="#contact">Kontakt</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProjectGrid :projects="projects"/>
    <Foot
      :facebook="contents.facebook"
      :twitter="contents.twitter"
      :linkedin="contents.linkedIn"
      :github="contents.gitHub"
      :instagram="contents.instagram"
      :headline="contents.footerHeadline"
      :body="contents.footerBody"
      :copyright="contents.copyright"
    />
  </div>
</template>

<script>
import ProjectGrid from "@/components/ProjectGrid.vue";
import Foot from "@/components/Foot.vue";
import HeadlessService from "@/services/HeadlessService.js";
export default {
  components: {
    ProjectGrid,
    Foot
  },
  data() {
    return {
      contents: {},
      projects: []
    };
  },
  created() {
    HeadlessService.GetRoot().then(data => {
      this.contents = data;
    });
    HeadlessService.GetProjects().then(data => {
      this.projects = data.results;
    });
  }
};
</script>

<style scoped>
html,
body {
  font-family: "GT Eesti Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  background: #f0f2f4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.card {
  margin-bottom: 3rem;
}
.content-wrapper {
  margin-top: 3rem;
}
.card-footer-item {
  font-size: 12px;
  font-weight: bold;
  color: #666;
}
.card-header-title {
  display: block;
}
.card-content p {
  margin-bottom: 2rem;
}
.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
.arrow {
  text-align: center;
  margin: 3% 0;
}
</style>