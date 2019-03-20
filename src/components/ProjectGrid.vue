<template>
  <section id="portfolio" class="is-white is-fullheight">
    <div class="hero-body">
      <div class="container content-wrapper">
        <p class="filtering">
          Filtre:
          <a
            class="tag alle"
            :class="{ active:filter.category == null}"
            @click="removeFilter()"
          >Alle</a>
          <a
            class="tag"
            :class="[{ active:filter.category == cat.urlName }, cat.urlName] "
            v-for="cat in categories"
            :key="cat.id"
            @click="filterProjects(cat.urlName)"
          >{{ cat.name }}</a>
        </p>
        <transition-group
          v-if="filter.active == false"
          name="projects"
          tag="div"
          class="columns is-multiline"
        >
          <template v-for="project in projects">
            <SingleProject :projects="project" @get-category="filterProjects" :key="project.id"/>
          </template>
        </transition-group>
        <transition-group v-else class="columns is-multiline" name="projects" tag="div">
          <template v-for="project in filteredProjects">
            <SingleProject :projects="project" @get-category="filterProjects" :key="project.id"/>
          </template>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
export default {
  props: ["projects"],
  components: {
    SingleProject
  },
  data() {
    return {
      filter: {
        active: false,
        category: null
      },
      filteredProjects: []
    };
  },
  computed: {
    categories() {
      let array = [];
      for (let i = 0; i < this.projects.length; i++) {
        array.push(this.projects[i].properties.category[0]);
      }
      function getUnique(arr, comp) {
        const unique = arr
          .map(e => e[comp])

          // store the keys of the unique objects
          .map((e, i, final) => final.indexOf(e) === i && i)

          // eliminate the dead keys & store unique objects
          .filter(e => arr[e])
          .map(e => arr[e]);

        return unique;
      }
      return getUnique(array, "name");
    }
  },
  methods: {
    filterProjects: function(category) {
      this.filteredProjects = this.projects.filter(function(project) {
        return project.properties.category[0].urlName == category;
      });
      this.filter.active = true;
      this.filter.category = category;
    },
    removeFilter: function() {
      this.filter.active = false;
      this.filter.category = null;
      this.filteredProjects = [];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.filtering {
  padding-bottom: 15px;
  .tag {
    margin-right: 10px;
  }
  .active {
    background-color: $black;
    color: $white;
  }
}

//Transition stuff

.projects {
  &-move {
    transition: transform 0.4s;
  }
  &-leave-active {
    position: absolute;
  }
  &-leave {
    transition: all 0.4s;
  }
  &-enter-active {
    transition: opacity 0.4s;
    transition-delay: 0.2s;
  }
}

.projects-enter, .projects-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>