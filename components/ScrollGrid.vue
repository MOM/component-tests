<template>
  <div>
    <div>Scrolling? {{ scrolling }}</div>
    <ul ref="gallery" class="gallery">
      <li v-for="i in range" :key="i" tabindex="0">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
let scrollTimeout;

export default {
  data() {
    return {
      scrolling: false,
    };
  },
  computed: {
    range() {
      const result = [];
      for (let i = 0; i < 45; i++) {
        result.push(i);
      }
      return result;
    },
  },
  mounted() {
    this.$refs.gallery.addEventListener("scroll", function (e) {
      if (this.scrolling) {
        clearTimeout(scrollTimeout);
      } else {
        this.scrolling = true;
        console.log("Started scrolling");
      }
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        this.scrolling = false;
        console.log("Stopped scrolling");
      }, 250);
    });
  },
};
</script>

<style scoped>
.gallery {
  border: 1px solid lightgray;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(10, 15vw);
  grid-template-rows: repeat(10, 15vw);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  overflow: scroll;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: both mandatory;
  scroll-padding: 1rem;
}

li {
  scroll-snap-align: start;
  display: inline-block;
  border-radius: 3px;
  height: 15vw;
  background: #cccccc;
}
li:focus {
  outline: 1px solid red;
}
</style>
