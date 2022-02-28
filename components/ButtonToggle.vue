<template>
  <button data-text="toggle-button" @click="toggle" class="border-2 px-2">
    button {{ text }}
  </button>
</template>

<script>
export default {
  props: ["offText", "onText", "startActive"],
  data() {
    return {
      active: this.startActive,
    };
  },
  computed: {
    text() {
      return this.active ? this.onText : this.offText;
    },
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>
