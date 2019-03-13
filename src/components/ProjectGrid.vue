<template>
  <section id="portfolio" class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="container content-wrapper">
        <!-- 1st line -->
        <div class="columns is-multiline">
          <template v-for="project in projects">
            <SingleProject :project="project" :key="project.id"/>
          </template>
        </div>
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
  }
};
</script>

<style scoped>
</style>