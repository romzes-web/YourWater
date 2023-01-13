<script>
import CustomInput from './CustomInput.vue';
import {useVuelidate} from '@vuelidate/core'
import {helpers, required} from '@vuelidate/validators'
export default {
    components: { CustomInput },
    data() {
        return {
            v$: useVuelidate(),
            orderData: {
                name: '',
                phone: '',
                deliveryTime: '',
                street: '',
                house: '',
                building: '',
                apartment: '',
                porch: '',
                floor: '',
                additionalInformation: ''
            }
        }
    },
    validations() {
        return {
            orderData: {
                name: { required: helpers.withMessage('Это поле не может быть пустым', required) },
                phone: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                deliveryTime: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                street: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                house: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                building: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                apartment: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                porch: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                floor: {required: helpers.withMessage('Это поле не может быть пустым', required)},
                additionalInformation: {}
            }
        }
    },
    methods: {
        formSubmit() {
            const valid = this.v$.$validate()
            if (!valid) {
                console.log(this.orderData);
            }
            else {
                console.log('Не правильно заполнена форма');
            }
        }
    }
}
</script>

<template>
    <div class="order-form">
        <div class="order-form__wrapper">
            <p class="order-form__price"><span class="order-form__text">Итого:</span><span  class="order-form__price-text">1135 руб</span></p>
            <p class="order-form__text">Контактная информация</p>
            <form class="order-form__conteiner" @submit.prevent>
                <div class="col-12 order-form__field">
                    <CustomInput class="order-form__input" v-model="v$.orderData.name.$model" :inputPlaceholder="'Ваше имя'"/>
                    <span v-for="error of v$.orderData.name.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                </div>
                <div class="col-12 order-form__field">
                    <CustomInput class="order-form__input" v-model="v$.orderData.phone.$model" :inputPlaceholder="'Ваш телефон'"/>
                    <span v-for="error of v$.orderData.phone.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                </div>
                <div class="col-12 order-form__field">
                    <CustomInput class="order-form__input" v-model="v$.orderData.deliveryTime.$model" :inputPlaceholder="'Время доставки'"/>
                    <span v-for="error of v$.orderData.deliveryTime.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                </div>
                <div class="w-100 d-flex gap-2">
                    <div class="col-9 order-form__field">
                        <CustomInput class="order-form__input" v-model="v$.orderData.street.$model" :inputPlaceholder="'Улица'" />
                        <span v-for="error of v$.orderData.street.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                    </div>
                    <div class=" order-form__field">
                        <CustomInput class="order-form__input order-form__input_align-c" v-model="v$.orderData.house.$model" :inputPlaceholder="'Дом'" />
                        <span v-for="error of v$.orderData.house.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                    </div>
                </div>
                <div class="d-flex gap-2">
                    <div class="order-form__field">
                        <CustomInput class="order-form__input order-form__input_align-c" v-model="v$.orderData.building.$model" :inputPlaceholder="'Корпус'" />
                        <span v-for="error of v$.orderData.building.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                    </div>
                    <div class="order-form__field">
                        <CustomInput class="order-form__input order-form__input_align-c" v-model="v$.orderData.apartment.$model" :inputPlaceholder="'Кв/офис'" />
                        <span v-for="error of v$.orderData.apartment.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                    </div>
                    <div class="order-form__field">
                        <CustomInput class="order-form__input order-form__input_align-c" v-model="v$.orderData.porch.$model" :inputPlaceholder="'Подъезд'" />
                        <span v-for="error of v$.orderData.porch.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                    </div>
                    <div class="order-form__field">
                        <CustomInput class="order-form__input order-form__input_align-c" v-model="v$.orderData.floor.$model" :inputPlaceholder="'Этаж'" />
                        <span v-for="error of v$.orderData.floor.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                    </div>
                </div>
                <div class="col-12 order-form__field">
                    <CustomInput class="order-form__input" v-model="v$.orderData.additionalInformation.$model" :inputPlaceholder="'Дополнительная информация'"/>
                    <span v-for="error of v$.orderData.additionalInformation.$errors" :key="error.$uid" class="order-form__error-message">{{error.$message}}</span>
                </div>
                <input type="submit" value="Заказать" class=" order-form__submit" @click="formSubmit">
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order-form{
    background: #FFFFFF;
    box-shadow: 0px 0px 60px rgba(101, 101, 101, 0.1);
    border-radius: 20px;
    width: 100%;
    // max-width: 455px;
    &__wrapper{
        padding: 68px 35px 55px;
    }
    &__text{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 25px;
        color: #656565;
    }
    &__price{
        display: flex;
        align-items: flex-end;
        justify-content: end;
        gap: 8px;
        margin-bottom: 70px;
        &-text{
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 35px;
            line-height: 35px;
            color: #128EC9;
        }
    }
    &__conteiner{
        padding-top: 52px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    &__field{
        margin-bottom: 26px;
    }
    &__input{
        padding: 11px 30px;
        &_align-c{
            text-align: center;
            padding: 11px 0;
            &::placeholder {
                    text-align: center;
                }
        }
        
    }
    &__error-message{
        color: #f00;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-size: 14px;
        line-height: 14px;
    }
    &__submit{
        margin-top: 26px;
        border: 1px solid #128EC9;
        border-radius: 50px;
        padding: 20px 40px;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #128EC9;
        background: #FFFFFF;
    }
}
</style>