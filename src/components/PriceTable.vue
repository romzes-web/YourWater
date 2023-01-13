<script>
import IconCart from './icons/IconCart.vue'

export default {
  components: {
    IconCart,
  },
  props: {
    price: {
      type:String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    inCart: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    parsedPrices() {
      const prices = this.price.split(';').map(rule => rule.split(':'))
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
      
      let pricePerItem = this.parsedPrices[ruleIdx - 1].price
      if (!pricePerItem) {
        pricePerItem = this.parsedPrices[this.parsedPrices.length - 1].price
      }
      
      return pricePerItem * this.amount
    },
  }
}
</script>

<template>
  <div class="product-information__sheet">
    <div class="quantity">
      <div class="quantity-change">
        <div style="display: flex; justify-content: center; align-items: center;">
          <span class="quantity-text">Цена от:</span> 
          <div class="amount">
            <input class="amount-input" type="text" v-model="amount">
            <div class="amount-controls">
              <button @click="this.$emit('decreaseQuantity')">-</button>
              <button @click="this.$emit('increaseQuantity')">+</button>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!inCart"
            class="btn btn-primary btn-cart"
            @click="this.$emit('addToCart')"
          >
            Добавить
          </button>
          <span
            v-else
            class="cart-price"
          >
            {{ totalPrice }} руб
          </span>
        </div>
      </div>
    </div>
    <table v-if="parsedPrices.length === 1">
      <tr v-for="item in parsedPrices">
        <td colspan="2">{{ item.price }} руб/шт</td>
      </tr>
    </table>
    <table v-else>
      <tr v-for="item in parsedPrices">
        <td v-if="item.price !== 0">{{ item.qty }} бут.</td>
        <td v-if="item.price !== 0">{{ item.price }} руб/шт</td>
      </tr>
    </table>
  </div>
</template>


<style lang="scss" scoped>
button.btn-cart {
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

.amount {
  display: flex;
  height: 38px;
  margin: auto 0 auto 8px;

  .amount-input {
    display: block;
    width: 64px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .1);
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

p {
  margin: 0;
}

table {
  margin-top: 65px;
  border-style: hidden;
  border-collapse: collapse;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
}

table, tr {
  width: 100%;
}

td {
  width: 50%;
  border: 1px solid #74D2FF; 
  padding: 9px;
  color: #128EC9;
  font-size: 18px;
  line-height: 20px;
  font-family: 'Lato Bold';
  text-align: center;
}

.product-information__sheet {
  width: 100%;
  max-width: 525px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #128EC9;
  border-radius: 20px;
  padding: 40px 54px;
  filter: drop-shadow(0px 0px 10px rgba(116, 210, 255, .2));
  backdrop-filter: blur(30px);

  @media (max-width: 768px) {
    width: 100%;
  }
}

.add-to-order {
  display: flex;
  max-height: 50px;
  padding: 14px 15px;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
  background-color: #128EC9;
  border: none;
  border-radius: 25px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
}

.price {
  font-family: 'Lato Bold';
  font-size: 16px;
  line-height: 140%;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-change {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    position: relative;
    align-items: center;
    width: 100%;
  }
}
</style>
