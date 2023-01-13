<script>
import Heading from '../components/Heading.vue'
import SideCategoriesMenu from '../components/SideCategoriesMenu.vue'
import CatalogGrid from '../components/CatalogGrid.vue'
import ActivityIndicator from '../components/ActivityIndicator.vue'
import * as api from '../api'

export default {
  components: {
    Heading,
    SideCategoriesMenu,
    CatalogGrid,
    ActivityIndicator
  },
  props: ['catid'],
  data() {
    return {
      categories: null,
      products: null,
    }
  },
  methods: {
    async fetchCategories() {
      const response = await api.getCategories()
      const data = await response.json()
      this.categories = data
        .filter((category) => category.company_id === '0007')
        .filter((category) => category.visible_app === 1)
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
        .filter((product) => product.company_id === '0007')
        .filter((product) => product.is_active === 1)
        .filter((product) => product.app === 1)
    },
  },
  computed: {
    requestedCategory() {
      return parseInt(this.$route.params.catid) || null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchCategories()
      this.fetchProducts()
    })
  },
}
</script>

<template>
  <main id="page-catalog">
    <div class="container my-lg-5">
      <div class="row">
        <div class="col-3 px-0">
          <SideCategoriesMenu
            :categories="categories"
            :selected="requestedCategory"
          />
        </div>
        <div id="catalog-grids" class="col-9">
          <div class="row">
            <ActivityIndicator v-if="!products" class="mx-auto"/>
            <div class="col-12">
              <div
                v-if="!requestedCategory"
                v-for="category in categories"
                :key="category.id"
              >
                <CatalogGrid
                  :title="category.title"
                  :products="products.filter(p => p.category === category.id)"
                />
              </div>

              <div v-else-if="requestedCategory">
                <CatalogGrid
                  :title="categories.find(cat => cat.id === requestedCategory).title"
                  :products="products.filter(p => p.category === requestedCategory)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#page-catalog {
  min-height: 100vh;
}

#catalog-grids {
  padding-left: 24px;
  padding-right: 0;
}
</style>
