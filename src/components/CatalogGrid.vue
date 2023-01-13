<script>
import Heading from './Heading.vue'
import ProductCard from './ProductCard.vue'

export default {
  components: {
    Heading,
    ProductCard,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array[Object] || null,
      required: true
    }
  }
}
</script>

<template>
  <Heading :title="title"/>
  <div class="row justify-content-start category-grid">
    <div
      class="category-grid-item"
      v-for="product in products"
      :key="product.id"
    >
      <ProductCard :item="product"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-grid {
  
  &-item {
    width: calc(100%/3);
    margin-bottom: 24px;
  }
}
</style>
