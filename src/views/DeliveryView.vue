<script>
import Heading from '../components/Heading.vue'
import CatalogCarousel from '../components/CatalogCarousel.vue'
import { getProducts } from '../api'
// import Breadcrumbs from '../components/Breadcrumbs.vue'

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
        <!-- <Breadcrumbs/> -->
        <div class="col-12">
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="О Доставке"/>
              <div class="content px-lg-2 pt-2">
                <!-- <div class="row p-4 rounded-3 delivery-info">
                  <div class="col-8 delivery-info-descr">
                    <div class="row delivery-info-descr-heading">
                      <div class="col-12 mb-5">
                        <span class="h1">Доставка в день заказа*</span>
                      </div>
                    </div>
                    <div class="row delivery-info-descr-body">
                      <div class="col-12 mb-5">
                        <p>с Пн. по Пт. при заказе до 12:00</p>
                        <p>доставка с 17:00 до 22:00</p>
                        <p>или с 19:00 до 22:00</p>
                      </div>
                    </div>
                    <div class="row delivery-info-descr-footer">
                      <div class="col-12">
                        <p>Доставка осуществляется в пределах КАДа</p>
                        <p>До 8 бутылок за 1 поставку</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 delivery-info-image">
                    <img src="/images/dlvr-info.png" alt="">
                  </div>
                </div> -->
                <p><b>Стоимость воды:</b> согласно <a href="/catalog">прайс-листу и ассортименту</a></p>
                <p><b>Залог за бутыль:</b> Заказывай воду Plesca без залога за бутыль!</p>
                <p><b>Заказ воды осуществляется:</b> Пн-Вс 9-20, по телефону: <a href="tel:+78129477993">+7 (812) 947-79-93</a></p>
              </div>
            </div>
          </section>

          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Режим приема заявок и доставки"/>
              <!-- <Heading title="Оформление заказа"/> -->
              <div class="content px-lg-2 pt-2">
                <p>Доставка в тот же день производится для заказов, сделанных до 12:00 этого дня.</p>
                <p>
                  Доставка на следующий день — для заказов, сделанных до 16:00 текущего дня. Заказ,
                  сделанный после 16:00, доставляется через 1 рабочий день.
                </p>
                <p>
                  Доставка возможна в один из интервалов:<br>
                  <b>ПН-ПТ</b>: 09:00 - 16:00, 17:00 - 22:00, 19:00 - 22:00<br><b>СБ</b>: 09:00 - 16:00
                </p>
                <!-- <p>
                  Оформить заказ на доставку воды в Санкт-Петербург можно
                  в <a href="/catalog">нашем каталоге</a> или по
                  телефону <a href="tel:+78129477993">+7 (812) 947-79-93</a>
                </p> -->
              </div>
            </div>
          </section>

          <!-- <section class="row mb-4" v-if="products">
            <div class="col-12">
              <Heading title="Аксессуары"/>
              <div class="content px-lg-2 pt-2">
                <p>
                  В компании «Ё-Water» вы можете в заказать питьевую воду в СПб и сопутствующие аксессуары.
                  <br>
                  Цены на кулеры для воды, помпы для воды и прочее сопутствующее оборудование и сопутствующие
                  товары с доставкой по Петербургу.
                </p>
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
          </section> -->

          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Карта районов доставки"/>
              <div class="content px-lg-2 pt-2">
                MAP
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

    &-heading {
      .h1 {
        font-weight: 800;
        color: #128EC9;
      }

    }

    &-body {
      p {
        margin: 0;
        color: #444444;
        font-weight: 500;
        font-size: 35px;
        line-height: 37px;
      }
    }

    &-footer {
      p {
        margin: 0;
        color: #444444;
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
      }
    }
  }

  &-image {
    img {
      width: 100%;
    }
  }
}

// @media (max-width: 768px) {
//   .col-4 {
//     image-rendering: crisp-edges;
//     order: 1;
//     width: 100%;
//   }

//   .col-4 > img:nth-child(1) {
//     object-fit: contain;
//     width: 100%;
//   }

//   .col-8 {
//     order: 2;
//     width: 100%;
//   }

//   .p-4 {
//     flex-direction: column;
//   }
// }
</style>
