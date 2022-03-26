<template>
  <div>
    <div>
      <span data-test="banner:message">{{ message }}</span>
      <span>{{ details }}</span>
    </div>
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
