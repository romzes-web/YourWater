<script>
import { RouterLink } from 'vue-router'
import IconCart from './icons/IconCart.vue'
import IconPhoneVoice from './icons/IconPhoneVoice.vue'
import SideMenu from './SideMenu.vue'

export default {
  components: {
    IconCart,
    IconPhoneVoice,
    SideMenu
  },
  data() {
    return {
      links: [
        { id: 0, title: 'Главная', to: '/' },
        { id: 1, title: 'Каталог', to: '/catalog' },
        { id: 2, title: 'О воде', to: '/water' },
        { id: 3, title: 'О доставке', to: '/delivery' },
        { id: 4, title: 'Оплата', to: '/payments' },
        { id: 5, title: 'Контакты', to: '/contacts' },
      ],
    }
  }
}

</script>

<template>
  <header class="container mt-3">
    <SideMenu 
      :menus="links"
    />
    <div class="row">
      <div class="col-2 px-0">
        <div class="logo">
          <img src="/logo.svg" alt="logo" @click="this.$router.push('/')">
        </div>
      </div>
      <div class="col-6 align-items-end d-none d-md-flex">
        <div class="w-100 nav-container">
          <RouterLink
            v-for="link in links"
            :key="link.id"
            :to="link.to"
          >
            <div class="link-title">
              {{ link.title }}
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="col-2 cart-w-order">
          <RouterLink to="/cart" class="cart ">
            <span class="cart-icon"><IconCart/></span>
            <span class="cart-count d-none d-md-flex">0 руб.</span>
          </RouterLink>
        <button
          class="btn btn-outline-primary w-auto mx-auto btn-reoder  d-none d-md-flex"
          type="button"
        >
          Повторить заказ
        </button>
      </div>
      <div class="col-2 px-0 contacts d-none d-md-flex">
        <!-- <div class="c-login">Вход в кабинет</div> -->
        <div class="c-tel">
          <IconPhoneVoice/>
          <a href="tel:+78129477993">+7 (812) 947-79-93</a>
        </div>
        <div class="c-mail">
          <a href="mailto:info@yourwater.ru">info@yourwater.ru</a>
          <span>Прием заявок круглосуточно</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>


@media only screen and (max-width: 768px) {

  .cart {
      position: fixed;
      right: 15px;
      top: 90px;
      z-index: 100;
  }
}

.nav-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
  }
}

.link-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #656565;
  padding: 5px 0 40px 0;
  border-bottom: 2px solid transparent;

  a:not(.router-link-active):hover & {
    border-color: #f0f0f0;
  }

  .router-link-active & {
    color: #128EC9;
    border-color: #128EC9;
  }
}

.cart-w-order {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.cart {
  border: 1px solid #128EC9;
  border-radius: 100px;
  margin: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  text-decoration: none;

  .cart-icon {
    display: flex;
    min-width: 40px;
    min-height: 40px;
    padding: 0;
    justify-content: center;
    align-items: center;
    background-color: #128EC9;
    border-radius: 100px;
  }

  .cart-count {
    margin-left: 8px;
    margin-right: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;

    color: #656565;
  }

  svg {
    color: white;
  }
}

.btn-reoder {
  --bs-btn-border-color: #128EC9;
  --bs-btn-border-radius: 100px;
  --bs-btn-font-weight: 700;
  --bs-btn-color: #128EC9;
  --bs-btn-hover-bg: #128EC9;
  --bs-btn-hover-border-color: #128EC9;
  font-family: 'Lato';
  font-style: normal;
  font-size: 14px;
  padding: 14px 30px;
  border-width: 2px;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: end;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;

  .c-tel {
    display: flex;
    justify-content: end;
    align-items: center;

    svg {
      margin-right: 4px;
      color: #128EC9;
    }

    a {
      font-size: 20px;
      text-align: right;
      color: #656565;
      text-decoration: none;
    }
  }

  .c-mail {
    display: flex;
    flex-direction: column;

    a {
      font-size: 16px;
      text-align: right;
      color: #128ec9;
    }

    span {
      font-size: 14px;
      text-align: right;
      color: #adadad;
    }
  }
}

/* TEMP FIX */
.align-items-end {
  align-items: center !important;
}
.contacts {
  justify-content: space-between;
  padding-top: 54px;
  align-items: end;
}
.cart-w-order {
  padding-top: 34px;
  gap: 12px;
}
</style>
