<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  props: [
    "content",
    "index",
    "currentSlide",
    "activeQnt",
    "fadedNext",
    "margin"
  ],
  data() {
    return {
      opacich: this.currentSlide + 2 === this.index,
    }
  },
  computed: {
    cardWidth() {
      return (100 / this.activeQnt) + '%'
    },
    cardMargin() {
      return this.margin;
    },
    isDisplaying() {
      // const cond1 = (this.currentSlide <= this.index) && (this.index < (this.currentSlide + this.activeQnt))
      // const cond2 = (this.fadedNext && (this.index <= (this.currentSlide + this.activeQnt)))
      // return cond1 || cond2

      return this.currentSlide <= this.index && ( (this.index < this.currentSlide + this.activeQnt) || (this.fadedNext && this.index <= this.currentSlide+this.activeQnt))
    }
  }
}
</script>

<template>
  <div
    class="product_box"
    v-show="isDisplaying"
    :style="(currentSlide + activeQnt) <= index ? 'opacity: 0.3;' : '' "
  >
    <!-- <div class="text"> -->
      <ProductCard :item="content"/>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
:root {
  --mymargin: 40px;
}

.text {
  color: black;
  font-size: 30px;
}

.product_box {
  min-width: calc(v-bind(cardWidth) - v-bind(cardMargin));
  height: auto;
  background: #FFFFFF;
  /* box-shadow: 0px 0px 60px rgba(101, 101, 101, 0.1); */
  border-radius: 20px;
  margin-right: v-bind(cardMargin);
  transition: all 0.35s ease;

  .product-card {
    box-shadow: 0 5px 25px -5px #6565651a !important;
  }
}
</style>
