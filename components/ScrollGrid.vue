<template>
  <div>
    <ul
      ref="gallery"
      class="gallery"
      :class="{ snap: !clicked }"
      @mousedown="onMousedown"
      @mouseup="onMouseup"
      @mouseout="onMouseup"
      @mousemove="onMousemove"
    >
      <li
        :ref="`galleryItem${i}`"
        v-for="i in range"
        :key="i"
        tabindex="0"
        @focus="onFocus"
        @keydown.down.prevent="goToItem(i + 10)"
        @keydown.up.prevent="goToItem(i - 10)"
        @keydown.left.prevent="goToItem(i - 1)"
        @keydown.right.prevent="goToItem(i + 1)"
      >
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
      clicked: false,
      clickX: 0,
      clickY: 0,
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
      }
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        this.scrolling = false;
      }, 250);
    });
  },
  methods: {
    onMousedown(e) {
      this.clicked = true;
      this.clickX = e.layerX;
      this.clickY = e.layerY;
    },
    onMouseup(e) {
      this.clicked = false;
    },
    onMousemove(e) {
      if (this.clicked) {
        this.$refs.gallery.scrollBy(
          this.clickX - e.layerX,
          this.clickY - e.layerY
        );
      }
    },
    onFocus(e) {
      console.log(e);
      if (!this.clicked) {
        e.target.scrollIntoView({ behavior: "smooth" });
      }
    },
    goToItem(i) {
      const next = this.$refs[`galleryItem${i}`];
      if (next) {
        next[0].focus();
      }
    },
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
  /* width: 100vw; */
  height: 100vh;
}
.snap {
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
  background: red;
}
</style>
