<template>
  <div class="column is-one-third">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ project.headline }}</p>
        <span class="card-header-tags">
          <span
            :class="'tag' + ' ' + skill.urlName"
            v-for="skill in sortedSkills"
            :key="skill.id"
          >{{ skill.name }}</span>
        </span>
      </header>
      <div class="card-content">
        <figure class="image">
          <img :src="'https://hjaltes-impartial-elephant.s1.umbraco.io/' + project.image">
        </figure>
        <div style="margin-top:1em" class="content">{{ project.description }}</div>
        <div class="field is-grouped-multiline">
          <div class="control">
            <div class="tags">
              <a
                :class="'tag' + ' ' + cat.urlName"
                v-for="cat in project.category"
                :key="cat.id"
                href="/#portfolio"
                v-smooth-scroll
                @click="GetCategoryItems(cat.urlName)"
              >{{ cat.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a :href="project.link" target="_blank" class="card-footer-item">
          <span class="icon">
            <i class="fa fa-eye"></i>
          </span>
          Se projektet
        </a>
        <a :href="project.repository" target="_blank" class="card-footer-item">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          Se kilden
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"],
  computed: {
    sortedSkills: function() {
      return require("lodash").orderBy(this.project.skills, "name");
    },
    project: function() {
      return this.projects.properties;
    }
  },
  methods: {
    GetCategoryItems: function(category) {
      this.$emit("get-category", category);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.card {
  transition: all 1s;
}
.tag {
  margin-right: 10px;
}
.image {
  img {
    max-height: 300px;
    margin: auto;
    width: auto;
  }
}

.card-header {
  min-height: 72px;
  padding-right: 6px;
  &-tags {
    text-align: right;
    align-self: center;
    .tag {
      margin: 3px;
    }
  }
}

.card-footer-item {
  color: $black;
  &:hover {
    text-decoration: underline;
    color: $red;
  }
}

.card-content {
  @media screen and (min-width: 768px) {
    min-height: 560px;
  }
}

//Different skills tags
.html {
  background-color: $htmlColor;
  color: $white;
}
.css {
  background-color: $cssColor;
  color: $white;
}
.vuejs {
  background-color: $vuejsColor;
  color: $white;
}
.js {
  background-color: $jsColor;
  color: $white;
}
.sass {
  background-color: $sassColor;
  color: $white;
}
.c {
  background-color: $csharpColor;
  color: $black;
}
.umbraco {
  background-color: $umbracoColor;
  color: $white;
}
.aspnet {
  background-color: $aspnetColor;
  color: $white;
}
.bootstrap {
  background-color: $bootstrapColor;
  color: $white;
}
.drupal {
  background-color: $drupalColor;
  color: $white;
}
.php {
  background-color: $phpColor;
  color: $white;
}
.bulma {
  background-color: $bulmaColor;
  color: $white;
}

//Different category tags
.studieprojekt {
  background-color: $studieColor;
  color: $black;
}
.arbejde {
  background-color: $arbejdeColor;
  color: $white;
}

.sideprojekt {
  background-color: $red;
  color: $white;
}
</style>