<template>
  <div>
    <div v-if="isEmpty(contents)">
      <section id="home" class="hero is-white is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <h1 class="subtitle is-2 has-text-weight-light" v-html="contents.headline"></h1>
                <h3 class="subtitle is-3 has-text-weight-light" v-html="contents.body"></h3>
                <h4 class="subtitle is-4 has-text-weight-light" v-html="contents.byline"></h4>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-2">
                <a
                  class="button is-medium is-success"
                  target="_blank"
                  :href="'https://hjaltes-impartial-elephant.s1.umbraco.io/' + contents.cV"
                >Se mit CV</a>
              </div>
              <div class="column is-2">
                <a class="button is-medium is-info" href="#contact">Kontakt mig</a>
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
    <div v-else>
      <section id="home" class="hero is-white is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
      this.contents = data.data._embedded.content[0].properties;
    });
    HeadlessService.GetProjects().then(data => {
      this.projects = data.data._embedded.content;
    });
  },
  methods: {
    isEmpty: function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return true;
      }
      return false;
    }
  }
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

//Loading spinner stuff

.lds-spinner {
  color: $red;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-spinner div {
  transform-origin: 32px 32px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 29px;
  width: 5px;
  height: 14px;
  border-radius: 20%;
  background: $red;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>