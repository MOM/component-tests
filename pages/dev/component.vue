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
      return this.$route.query.component;
    },
    props() {
      return this.$route.query.props
        ? JSON.parse(decodeURIComponent(this.$route.query.props))
        : null;
    },
  },
};
</script>
