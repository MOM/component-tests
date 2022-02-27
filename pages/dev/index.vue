<template>
  <div>
    <h1>Dev {{ component }}</h1>
    <component :is="component" v-bind="props"></component>
  </div>
</template>

<script>
export default {
  computed: {
    component() {
      return this.$route.query.component; // "nuxt-logo";
    },
    props() {
      return JSON.parse(decodeURIComponent(this.$route.query.props)); // { title: "Title!!!" };
    },
  },
};
</script>
