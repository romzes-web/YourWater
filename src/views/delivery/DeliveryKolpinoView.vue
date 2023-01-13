<script>
import Heading from '../../components/Heading.vue'
import CatalogCarousel from '../../components/CatalogCarousel.vue'
import { getProducts } from '../../api'

export default {
  components: {
    Heading,
    CatalogCarousel
  },
  data() {
    return {
      products: null,
    }
  },
  methods: {
    async fetchProducts() {
      const response = await getProducts()
      const data = await response.json()
      this.products = data
        .filter(product => product.company_id === '0007')
        .filter(product => product.is_active === 1)
        .filter(product => product.app === 1)
        .filter(product => product.category === 3)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchProducts()
    })
  },
}
</script>

<template>
  <main id="page-delivery">
    <div class="container my-lg-5">
      <div class="row">
        <div class="col-12">
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Доставка" />
              <div class="content px-lg-2 pt-2">
                <div class="row rounded-3 delivery-info">
                  <div class="col-12 delivery-info-descr">
                    <div class="row delivery-info-descr-body">
                      <div class="col-12 mb-5">
                        <p>Доставка питьевой воды в Пригороды Санкт-Петербурга!</p>
                        <p>Доставка воды в Колпино на дом и в офисы по расписанию:</p>
                        <p>С Пн по Пт с 9 до 21, минимальный интервал 3 часа.</p>
                        <p>В Субботу с 9 до 18, минимальный интервал 3 часа.</p>
                        <p>Подробнее о нашей воде (доставка в Колпино 19 литров) вы можете узнать <a href="/water">здесь.</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Оформление заказа" />
              <div class="content px-lg-2 pt-2">
                <p>Оформить заказ на доставку воды в Колпино можно в нашем <a href="/catalog">каталоге</a> или по телефону <a href="tel:+78129477993">+7 (812) 947-79-93</a></p>
              </div>
            </div>
          </section>

          <section class="row mb-4" v-if="products">
            <div class="col-12">
              <Heading title="Аксессуары" />
              <div class="content px-lg-2 pt-2">
                <p>В компании «Ё-Water» вы можете в Колпино купить воду и сопутствующие аксессуары.<br>Цены на кулеры для воды, помпы для воды и прочее сопутствующее оборудование и сопутствующие товары с доставкой в Колпино.</p>
                <div class="py-3 mb-3">
                  <CatalogCarousel
                    :gap="'20px'"
                    :activeQnt="4"
                    :fadedNext="true"
                    :items="products"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#page-delivery {
  min-height: 100vh;

  p, a {
    font-size: 16px;
  }
}

.delivery-info {
  background-color: #fff;

  &-descr {
    &-body {
      p {
        margin: 0;
        color: #444444;
        font-weight: 500;
        font-size: 35px;
        line-height: 37px;
      }
    }
  }
}
</style>
