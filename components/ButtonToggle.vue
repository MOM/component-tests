<template>
  <button
    class="button-toggle border-2 px-2 w-36"
    :class="{ inactive: !active }"
    data-test="toggle-button"
    @click="toggle"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    activeLabel: {
      type: String,
      default: "inactive",
    },
    inactiveLabel: {
      type: String,
      default: "active",
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    label() {
      return this.active ? this.activeLabel : this.inactiveLabel;
    },
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.inactive {
  color: gray;
}
</style>
