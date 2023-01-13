<script>
import SideCategoriesMenu from './SideCategoriesMenu.vue'
import MobileAppsAd from './MobileAppsAd.vue'
import Heading from './Heading.vue'
import CatalogCarousel from './CatalogCarousel.vue'
import * as api from '../api'

export default {
  components: {
    SideCategoriesMenu,
    Heading,
    CatalogCarousel,
    MobileAppsAd
  },
  props: {
    highlighted: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      categories: null,
      products: null
    }
  },
  methods: {
    async fetchCategories() {
      const response = await api.getCategories()
      const data = await response.json()
      this.categories = data
        .filter(category => category.company_id === '0007')
        .filter(category => category.visible_app === 1)
        .map((category) => {
          return {
            'id': category.id,
            'title': category.category,
          }
        })
    },
    async fetchProducts() {
      const response = await api.getProducts()
      const data = await response.json()
      this.products = data
        .filter(product => product.company_id === '0007')
        .filter(product => product.is_active === 1)
        .filter(product => product.app === 1)
    },
  },
  mounted() {
    this.fetchCategories()
    this.fetchProducts()
  },
}
</script>

<template>
  <div class="container catalog">
    <div class="row">
      <div class="col-3">
        <div class="row sidepanel">
          <SideCategoriesMenu
            :categories="categories"
          />
          <MobileAppsAd class="mt-5"/>
        </div>
      </div>
      <div class="col-9">
        <div class="row mainpanel">
          <div
            class="col-12 mt-2 mb-5"
            v-for="category in categories.filter(c => this.highlighted.includes(c.id))"
            :key="category.id"
          >
            <Heading :title="category.title"/>
            <CatalogCarousel
              :gap="'20px'"
              :activeQnt="3"
              :fadedNext="true"
              :items="products.filter(p => p.category === category.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .catalog {
//   display: grid;
//   grid-template-columns: 320px auto;
//   grid-gap: 40px;
// }

.mainpanel {
  padding-left: 20px;
}
</style>
