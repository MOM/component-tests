<template>
  <button data-test="my-button" class="border p-2">{{ label }}</button>
</template>

<script>
export default {
  props: ["label"],
};
</script>
