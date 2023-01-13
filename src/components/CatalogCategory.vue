<script>
import Heading from './Heading.vue'
import ProductCard from './ProductCard.vue'

export default {
  components: {
    Heading,
    ProductCard,
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array[Object] || null,
      required: true
    }
  },
  computed: {
    filteredProducts() {
      if (this.products) {
        return this.products.filter((product) => product.category === this.id)
      } else {
        return []
      }
    }
  }
}
</script>

<template>
  <Heading :title="title"/>
  <div class="row justify-content-start category-grid">
    <div
      class="category-grid-item"
      v-for="product in filteredProducts"
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
