<template>
  <div class="banner" data-test="banner">
    <span data-test="banner:message">{{ message }}</span>
    <span>{{ details }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    details: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.banner {
  cursor: pointer;
  border: 1px solid rgb(105, 90, 90);
  border-radius: 4px;
  padding: 0.5em 1em;
}
.banner:hover {
  background: rgb(231, 234, 248);
}
</style>
