<script>
import IconDeliveryCardBottle from './icons/IconDeliveryCardBottle.vue';
import IconDeliveryCardLocation from './icons/IconDeliveryCardLocation.vue';
import IconDeliveryCardMoney from './icons/IconDeliveryCardMoney.vue';

export default {
  components: {
    IconDeliveryCardBottle,
    IconDeliveryCardLocation,
    IconDeliveryCardMoney
  },
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    chips: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="delivery-card">
    <div class="delivery-card__wrapper">
      <div class="row d-flex justify-content-between">
        <div class="col-8">
          <h3 class="delivery-card__title">{{title}}</h3>
          <div class="delivery-card__text">
            <slot>
              <p></p>
            </slot>
          </div>
        </div>
        <div class="col-4 delivery-card__img" :style="{ backgroundImage: `url(${image})`}"></div>
      </div>
      <div class="delivery-card__bottom">
        <div
          class="delivery-card__bottom-wrapper"
          :class="[chips.length < 3 ? 'delivery-card__bottom-wrapper_col-2' : 'delivery-card__bottom-wrapper_col-3']"
        >
          <div v-if="chips.length >= 1" class="d-flex">
            <IconDeliveryCardBottle class="delivery-card__item-icon"/>
            <div class="delivery-card__item-text">{{ chips[0] }}</div>
          </div>
          <div v-if="chips.length >= 2" class="d-flex">
            <IconDeliveryCardMoney class="delivery-card__item-icon"/>
            <div class="delivery-card__item-text">{{ chips[1] }}</div>
          </div>
          <div v-if="chips.length >= 3" class="d-flex">
            <IconDeliveryCardLocation class="delivery-card__item-icon"/>
            <div class="delivery-card__item-text">{{ chips[2] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delivery-card {
  width: 100%;
  border: 1px solid rgba(18, 142, 201, .3);
  background-color: rgba(255, 255, 255, .3);
  border-radius: 20px;

  &__wrapper {
    height: 100%;
    padding: 35px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 14px rgba(116, 210, 255, 0.2);

    @media screen and (max-width: 600px) {
      padding: 40px;
    }
  }

  &__title {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 30px;
    color: #444444;

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  &__text {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #444444;
    min-height: 140px;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  &__img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 160px;
    height: 160px;

    @media screen and (max-width: 600px) {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -110px;
      right: -40px;
    }
  }

  &__bottom {
    border-top: 1px solid #74D2FF;
    width: 100%;
    margin-top: 40px;
    // align-self: flex-end;
  }

  &__bottom-wrapper {
    display: grid;
    margin-top: 40px;
    
    &_col-2 {
      grid-template-columns: 25% 30%;
      justify-content: center;
      gap: 80px;
    }

    &_col-3 {
      grid-template-columns: 25% 30% 25%;
      justify-content: space-between;
    }

    @media screen and (max-width: 600px) {
      grid-template-columns:none;
      grid-row-gap: 40px;
    }
  }

  &__item-icon {
    width: 100%;
    max-width: 36px;
    height: 36px;
    margin-right: 5px;

    @media screen and (max-width: 600px) {
      margin-right: 10px;
    }
  }

  &__item-text {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #444444;
    
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
}
</style>
