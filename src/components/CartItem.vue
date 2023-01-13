<script>
import Controls from './CardControls.vue';
export default {
    components: {
        Controls
    },
    props: {
        product: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            quantity: 1
        }
    },
    computed: {
        tables() {
            const prices = this.product.price.split(';').map(rule => rule.split(':'))
            const _ = prices.pop()
            return prices.map(([qtyStr, priceStr]) => {
                return {
                    qty: parseInt(qtyStr),
                    price: parseInt(priceStr)
                }
            })
        },
        FindPrice() {
            if (this.tables.length === 1) {
                return this.tables[0].price + ' руб.'
            }
            else {
                for (let n = 0; n < this.tables.length; n++) {
                    if (this.quantity < this.tables[this.tables.length - 1].qty) {
                        if (this.quantity >= this.tables[n].qty &&
                            this.quantity < this.tables[n + 1].qty) {
                            return this.tables[n].price * this.quantity + ' руб.'
                        }
                    }
                    else {
                        return this.tables[this.tables.length - 1].price * this.quantity + ' руб.'
                    }
                }
            }
        },
    },
}
</script>

<template>
    <div class="cart-item">
        <div class="cart-item__wrapper">
            <div class="col-2">
                <img class="cart-item__img" :src="'/water_008.png'" alt="">
            </div>
            <div class="col-4 cart-item__title">{{product.title}}</div>
            <div class="col-2 cart-item__price">{{FindPrice}}</div>
            <Controls v-model="quantity" class="col-2"/>
            <div class="col-1">
                <div class="cart-item__delete" @click="$emit('remove', porduct.id)"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart-item {
    background-color: #fff;
    width: 100%;
    box-shadow: 0px 0px 60px rgba(101, 101, 101, 0.1);
    border-radius: 20px;
    &__wrapper {
        padding: 17px 75px 17px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__img {
        max-width: 100%;
        height: auto;
    }
    &__title {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #656565;
    }
    &__price {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 25px;
        color: #128EC9;
    }
    &__delete {
        margin-left: auto;
        height: 40px;
        width: 40px;
        background: #128EC9;
        border-radius: 50px;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            width:3px;
            height: 24px;
            background-color: #fff;
            left: 19px;
            top: 8px;
            transform: rotate(45deg);
            border-radius: 5px;
        }
        &::after {
            content: '';
            position: absolute;
            width: 3px;
            height: 24px;
            background-color: #fff;
            right: 18px;
            top: 8px;
            transform: rotate(-45deg);
            border-radius: 5px;
        }
    }
}
</style>