<script>

export default {
    props: {
        modelValue: {
            type: Number,
            required: true
        }
    },
    methods: {
        addQuantity() {
            this.value++
        },
        reduceQuantity() {
            this.value === 1 ? this.value : this.value--
        }
    },
    computed: {
        value: {
            get() { return this.modelValue },
            set(newValue) { this.$emit('update:modelValue', newValue)}
        }
    }
}
</script>

<template>
    <div class="cart-item-controls">
        <div class="cart-item-controls__wrapper">
            <input class="cart-item-controls__input" v-model.number="value" type="text">
            <div class="cart-item-controls__button cart-item-controls__button-minus" @click="reduceQuantity">-</div>
            <div class="cart-item-controls__button cart-item-controls__button-plus" @click="addQuantity">+</div>
        </div>
        <p class="cart-item-controls__text">бут.</p>
    </div>
</template>

<style lang="scss" scoped>
.cart-item-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    &__wrapper{
        position: relative;
    }
    &__input {
        height: 44px;
        width: 76px;
        border: 1px solid #F5F5F5;
        border-radius: 10px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        padding: 14px 0 14px ;
        box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.1);
    }
        
    &__button {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #444444;
        position: absolute;
        cursor: pointer;
        &-minus{
            left: 15px;
            top: 14px;
        }
        &-plus{
            right: 15px;
            top: 14px;
        }
    }
    &__text{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #444444;
        margin: 0;
    }
}
</style>