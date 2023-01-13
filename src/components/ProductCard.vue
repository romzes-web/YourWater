<script>
import { RouterLink } from 'vue-router'
import IconAddToCart from './icons/IconAddToCart.vue'

// TODO: make this an environment variable
const MEDIA_BASE_URL = 'dev.new.iwatercrm.ru/iwatercrm/images'

/*
  Product structure
  {
    "id": 81,
    "name": "Plesca Натуральная 19л в оборотной таре",
    "shname": "PLN ",
    "app_name": "Plesca Натуральная в оборотной таре",
    "price": "1:325;2:300;4:280;8:260;10:230;20:220;",
    "discount": 4,
    "category": 1,
    "about": "0",
    "gallery": "008.PNG",
    "date_created": 1656498849,
    "date": "29/06/2022",
    "site": 1,
    "app": 1,
    "company_id": "0007",
    "measure": 9,
    "report_shortname": "PLN",
    "is_active": 1
  },
*/

export default {
  components: {
    IconAddToCart,
  },
  props: {
    item: {
      required: true
    }
  },
  data() {
    return {
      inCart: false,
      amount: 0,
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
  },
  watch: {
    amount(newAmount, oldAmount) {
      if (parseInt(newAmount) === 0) {
        this.inCart = false
      }
    }
  },
  computed: {
    imageURL() {
      const imageName = this.item.gallery
      return `https://${MEDIA_BASE_URL}/${imageName}`
    },
    parsedPrices() {
      const prices = this.item.price.split(';').map(rule => rule.split(':'))
      const _ = prices.pop()
      return prices.map(([qtyStr, priceStr]) => {
        return {
          qty: parseInt(qtyStr),
          price: parseInt(priceStr)
        }
      })
    },
    totalPrice() {
      if (this.amount === 1) {
        return this.parsedPrices[0].price * this.amount
      }

      const ruleIdx = this.parsedPrices.findIndex(rule => rule.qty > this.amount)

      let pricePerItem = this.parsedPrices[ruleIdx - 1]
      if (!pricePerItem) {
        pricePerItem = this.parsedPrices[this.parsedPrices.length - 1]
      }
      
      return pricePerItem.price * this.amount
    },
  },
}
</script>

<template>
  <div class="product-card">
    <div class="row mt-1 product-card-title">
      <div class="col-12">
        <RouterLink :to="`/catalog/${item.category}/${item.id}`">
          <h3>{{ item.app_name || item.name }}</h3>
        </RouterLink>
      </div>
    </div>

    <div class="row product-card-image">
      <div class="col-12">
        <img :src="imageURL" :alt="item.name">
      </div>
    </div>

    <div class="row product-card-controls">
      <div class="col-12 d-flex">
        <div>
          <div class="amount">
            <input class="amount-input" type="text" v-model="amount">
            <div class="amount-controls">
              <button @click="decreaseQuantity">-</button>
              <button @click="increaseQuantity">+</button>
            </div>
          </div>
        </div>

        <button
          v-if="!inCart"
          class="btn btn-primary"
          @click="addToCart"
        >
          Добавить
        </button>
        <span
          v-else
          class="cart-price"
        >
          {{ totalPrice || 'error' }} руб
        </span>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<style lang="scss" scoped>
.product-card {
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0px 0px 60px rgba(101, 101, 101, .1);
  border-radius: 20px;

  &-title {
    height: 68px;
    min-height: 68px;
    max-height: 68px;
    
    a {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      color: #656565;
      text-decoration: none;
        
      h3 {
        font-size: 18px;
        line-height: 22px;
        margin: 0;
      }
    }
  }

  &-image {
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }
  
  &-controls {
    margin-top: 25px;

    > div {
      justify-content: space-between;
      align-items: stretch;
    }

    button {
      background-color: #128EC9;
      border-color: #128EC9;
      border-radius: 100px;

      svg {
        margin-left: 13px;
        margin-top: -4px;
      }
    }

    .cart-price {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #128EC9;
      border-width: 1px;
      border-style: solid;
      border-color: #128EC9;
      border-radius: 100px;
      display: inline-block;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
      text-align: center;
      text-decoration: none;
    }
  }
}

.amount {
  display: flex;
  height: 100%;
  margin: auto 0;

  .amount-input {
    display: block;
    width: 64px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .amount-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: space-between;
    padding: 0 4px;
    pointer-events: none;

    button {
      background-color: transparent !important;
      border: none !important;
      pointer-events: all;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
