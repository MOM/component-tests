<template>
  <button data-text="toggle-button" @click="toggle" class="border-2 px-2 w-36">
    button {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    offText: {
      type: String,
      default: "inactive",
    },
    onText: {
      type: String,
      default: "active",
    },
    startActive: {
      type: Boolean,
      default: false,
    },
  },
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
