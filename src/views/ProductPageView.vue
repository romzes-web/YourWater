<script>
import Heading from '../components/Heading.vue'
import SideCategoriesMenu from '../components/SideCategoriesMenu.vue'
import PriceTable from '../components/PriceTable.vue'
import CatalogCarousel from '../components/CatalogCarousel.vue'
import ProductCard from '../components/ProductCard.vue'
import * as api from '../api'

// TODO: make this an environment variable
const MEDIA_BASE_URL = 'dev.new.iwatercrm.ru/iwatercrm/images'

export default {
  components: {
    Heading,
    SideCategoriesMenu,
    PriceTable,
    CatalogCarousel,
    ProductCard
  },
  props: ['catid', 'itemid'],
  data() {
    return {
      categories: null,
      product: null,
      amount: 0,
      inCart: false,
      suggested: null
    }
  },
  methods: {
    addToCart() {
      this.inCart = true
      this.amount = 1
    },
    increaseQuantity() {
      this.amount += 1
    },
    decreaseQuantity() {
      if (this.amount === 0) { return; }
      this.amount -= 1
      if (this.amount <= 0) {
        this.amount = 0
        this.inCart = false
      }
    },
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
      this.suggested = data
        .filter(product => product.company_id === '0007')
        .filter(product => product.is_active === 1)
        .filter(product => product.app === 1)
        .filter(product => product.category === parseInt(this.$route.params.catid))
    },
    async fetchProductInfo() {
      const response = await api.getProductById(this.$route.params.itemid)
      this.product = await response.json()
    },
  },
  computed: {
    imageURL() {
      const imageName = this.product.gallery
      return `https://${MEDIA_BASE_URL}/${imageName}`
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchCategories()
      this.fetchProductInfo()
      this.fetchProducts()
    })
  },
}
</script>

<template>
  <main id="page-product">
    <div class="container my-lg-5">
      <div class="row">

        <div class="col-3">
          <div class="row">
            <div class="col-12">
              <SideCategoriesMenu
                :categories="categories"
              />
            </div> 
          </div>
        </div>

        <div class="col-9" v-if="product">
          <div class="row">
            <div class="col-12">

              <div class="row mb-4">
                <h1 class="product-title">{{ product.name }}</h1>
              </div>

              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <div class="col-12">
                      <div class="item-image-container">
                        <img
                          :src="imageURL"
                          :alt="product.name"
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="row">
                    <div class="col-12">
                      <PriceTable
                        :price="product.price"
                        :amount="amount"
                        :inCart="inCart"
                        @decrease-quantity="decreaseQuantity"
                        @increase-quantity="increaseQuantity"
                        @add-to-cart="addToCart"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <div class="col-12">
                  <p>{{ product.about }}</p>
                </div>
              </div>

              <div class="row mt-5" v-if="suggested">
                <div class="col-12">
                  <Heading title="Рекомендуем также"/>
                </div>
                <div class="col-12">
                  <CatalogCarousel
                    :gap="'20px'"
                    :activeQnt="3"
                    :fadedNext="true"
                    :items="suggested"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#page-product {
  min-height: 100vh;
  font-size: 16px;
}

h1.product-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 38px;
  color: #656565;
}

.item-image-container {
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 60px rgba(101, 101, 101, 0.1);
  border-radius: 20px;
  max-height: 400px;
  display: flex;

  img {
    width: auto;
    max-height: 100%;
    object-fit: contain;
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>
