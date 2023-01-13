<script>
import { RouterLink } from 'vue-router'
import IconVK from './icons/IconVK.vue'
import IconTelegram from './icons/IconTelegram.vue'

export default {
  components: {
    IconVK,
    IconTelegram
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
  <footer class="d-flex">
    <div class="container my-auto">
      <div class="row">

        <div class="col-xl-3 col-md-6 col-5 px-0">
          <div class="logo">
            <img src="/logo.svg" alt="logo">
          </div>
        </div>

        <div class="col-xl-6 col-lg-9 col-sm-12 col-12 px-0 middle-content">
          <div class="col-xl-12 col-lg-12  col-sm-12 col-5 footer-links">
            <div v-for="(link, idx) in links" :key="link.id" class="footer-navlink-wrapper">
              <RouterLink
                :to="link.to"
              >
                <span class="link-title">{{ link.title }}</span>
              </RouterLink>
              <div v-if="idx !== (links.length - 1)" class="full-links">/</div>
            </div>
            <!-- <p class="full-links" style="color: #656565;">/</p> -->
          </div>

          <div class="col-xl-12 col-lg-12 col-sm-12 col-7 footer-info">
            <a href="#" class="store appstore">
              <img src="/images/app3.png" alt="">
            </a>
            <a href="#" class="store googleplay">
              <img src="/images/app2.png" alt="">
            </a>
            <a href="#">Юридические документы</a>
            <a href="#"  class="email">info@yourwater.ru</a>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 col-7 px-0 footer-contacts">
          <a class="telephone" href="tel:8(812)947-79-93"> +7 (812) 947 79 93 </a>
          <div class="footer-contacts__icons">
            <a href="" class="social-networks"><IconVK/></a>
            <a href="" class="social-networks"><IconTelegram/></a>
          </div> 
          <p style="font-size: 16px; line-height: 14px;" class="full">2009-2022. Все права защищены</p>
        </div>

      </div>
      <p style="font-size: 14px; line-height: 90%; margin-top: 60px; text-align: center;" class="col-12 phone" >2009-2022. Все права защищены</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-family: 'Lato';
  font-weight: 400;
  background-color: #f5f5f5;
  color: #656565;
  padding: 60px 0;

  @media  (max-width: 576px) {
    padding: 50px 0 40px 0;
  }
}

a {
  text-decoration: none;
  color: #656565;
}

p {
  margin: 0;
}

.footer-navlink-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

// span {
//   display: none;

//   @media (max-width: 576px) {
//     display: block;
//     flex-grow: 1;
//   }
// }

.full {
  display: block;
  @media (max-width: 1200px) {
    display: none;
  }
}

.phone {
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
}

.full-links {
  margin: 0 15px;
  display: block;

  @media  (max-width: 768px) or ((min-width: 992px) and (max-width: 1140px)) {
    display: none;
  }

  @media (max-width: 992px) or ((min-width: 1140px) and (max-width: 1200px)) {
    margin: 0 21px;
  }
}

.middle-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    order: 3;
    margin-top: 60px;     
  }

  @media (max-width: 576px) {
    flex-direction: row;
  }

  @media (min-width: 576px) and (max-width: 1200px) {
    .footer-links {
      margin-bottom: 35px;
    }
  }

  @media (min-width: 992px) and (max-width: 1200px){
    margin: 60px auto 0;
  }
}

.footer-links {
  display: inline-flex;
  text-align: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 90%;

  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  p {
    user-select: none;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    line-height: 240%;
    text-align: left;  
  }
}

.link-title {
  .router-link-active & {
    color: #128EC9;
  }
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  &__icons {
    display: flex;
    align-items: center;
  }

  @media (min-width: 576px) and (max-width: 1200px)  {
    justify-content: space-around;
  }

  @media (min-width: 576px) and (max-width: 1200px) {
    order: 2;
    justify-content: space-around;
  }
}

.footer-info {
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 16px;
  line-height: 90%;

  a { 
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 90%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: space-between;
  }
}

.social-networks {
  margin-left: 20px;

  @media (max-width: 576px) {
    margin-left: 15px;
  }
}

.store {
  order: 3;

  @media (max-width: 576px) {
    order: 0;
  }
}

.appstore {
  @media (min-width: 1400px) {
    margin: 0;
  }

  @media (min-width: 576px) {
    margin: 0 10px;
  }

  @media  (max-width: 576px) {
    margin: 10px 0;
  }
}

.email {
  margin: 0;
  color: #128EC9;

  @media  (max-width: 576px) {
    margin: 20px 0 15px;
  }

  @media (min-width: 992px) and (max-width: 1140px) {
    margin: 0 40px;
  }
}

.telephone {
  font-size: 20px;
  line-height: 18px;
  line-height: 90%;
}

@media (max-width: 576px) {
  .row {
    padding: 0 20px;
  }
  
  .logo img {
    width: 120px;
    height: 72px;
  }
}
</style>
