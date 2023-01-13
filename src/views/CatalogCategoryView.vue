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
  props: ['catid', 'itemid'],
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
  mounted() {
    this.fetchCategories()
    this.fetchProducts()
  },
}
</script>

<template>
  <main id="page-catalog">
    <div>catid: {{ $route.params.catid }} {{ typeof($route.params.catid) }}</div>
    <div class="container my-lg-5">
      <!-- <div class="row">
        <div class="col-12 px-0">
          <Heading title="Каталог"/>
        </div>
      </div> -->
      <div class="row">
        <div class="col-3 px-0">
          <SideCategoriesMenu
            :categories="categories"
            :selected="$route.params.catid"
          />
        </div>
        <div id="catalog-grids" class="col-9">
          <div class="row">
            <ActivityIndicator v-if="!products" class="mx-auto"/>
            <div class="col-12">
              <div
                v-if="!$route.params.catid || $route.params.catid === 0"
                v-for="category in categories"
                :key="category.id"
              >
                <CatalogGrid
                  :title="category.title"
                  :products="products.filter(p => p.category === category.id)"
                />
              </div>

              <div v-else-if="$route.params.catid">
                <CatalogGrid
                  :title="categories.find(cat => cat.id === parseInt($route.params.catid)).title"
                  :products="products.filter(p => p.category === parseInt($route.params.catid))"
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
