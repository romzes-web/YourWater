<script setup>
import HomeCatalog from '../components/HomeCatalog.vue'
import Heading from '../components/Heading.vue'
import AnnouncementCard from '../components/AnnouncementCard.vue'
import AdvantageCard from '../components/AdvantageCard.vue'
import DeliveryCard from '../components/DeliveryCard.vue'
import Carousel from '../components/Carousel.vue'
</script>

<template>
  <main id="page-home">
    <!-- slider mockup -->
    <div class="container mt-5 slider">
      <div class="row">
        <div class="col-5">
          <div class="row">
            <span class="h1" style="color: #444; font-weight: 300; font-size: 64px;">
              Лучшая
              <br>
              <span style="color: #128EC9; font-weight: 800;">доставка воды</span>
            </span>
            <p style="font-size: 20px; font-weight: 400; line-height: 140%; margin-top: 30px;">
              Только самая качественная питьевая вода. Доставим оперативно на дом или в офис, круглосуточно
            </p>
          </div>
          <div class="row">
            <AnnouncementCard
              style="margin-top: 60px;"
              :announcements="[
                {
                  date: '4 ноября',
                  text: ' доставка работает только днём, с 9.00 до 16.00'
                },
                {
                  date: '5-6 ноября',
                  text: 'выходные дни, доставка осуществляться не будет'
                },
                {
                  date: 'С 7 ноября',
                  text: 'работаем в обычном режиме'
                }
              ]"
            />
          </div>
        </div>
        <div class="col-7">
          <Carousel/>
        </div>
      </div>
    </div>
    
    <div class="container px-0">
      <div class="row mb-4">
        <div class="col-12">
          <HomeCatalog
            :highlighted="[1, 2, 4, 8]"
          />
        </div>
      </div>
    </div>

    <div class="spacer my-3"></div>

    <div class="container">
      <Heading title="О нас и нашем сервисе"/>
      <div class="row mb-4">
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-1.png" text="Собственное производство полного цикла"/>
        </div>
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-2.png" text="Вкусная и полезная вода без накипи"/>
        </div>
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-3.png" text="Заказ воды без залога за бутылку"/>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-4.png" text="Вода из Псковской области и Санкт-Петербурга"/>
        </div>
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-5.png" text="Доставка осуществляется в день заказа"/>
        </div>
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-6.png" text="Бесплатная аренда кулеров и помп для воды"/>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-7.png" text="Вода в оборотной и одноразовой таре"/>
        </div>
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-8.png" text="Акции для новых и постоянных клиентов"/>
        </div>
        <div class="col-sm-12 col-lg-4">
          <AdvantageCard image_url="/images/icons/adv-9.png" text="Соблюдаем все тех. требования и регламенты"/>
        </div>
      </div>
    </div>

    <div class="spacer my-3"></div>

    <div class="container">
      <Heading title="Как заказать"/>
      <div class="row mb-4">
        <div class="col-12">
        </div>
      </div>
    </div>

    <div class="spacer my-3"></div>

    <div class="container">
      <Heading title="Когда доставим"/>
      <div class="row mb-4">
        <div class="col-6">
          <DeliveryCard
            title="Доставка в день заказа!"
            image="/images/dlvr-1.png"
            :chips="[
              'До 8 бутылок за доставку',
              'Оплата на сайте, картой курьеру или наличными',
              'В пределах КАДа'
            ]"
          >
            <p>
              Для заказов, сделанных до 12:00 этого дня, возможна доставка:<br>
              Пн-Пт 17-22 или 19-22<br>
              Прием заказов с 9 до 20 
            </p>
          </DeliveryCard>
        </div>
        <div class="col-6">
          <DeliveryCard
            title="Доставка в другие дни"
            image="/images/dlvr-2.png"
            :chips="[
              'До 8 бутылок за доставку',
              'Оплата на сайте, картой курьеру или наличными'
            ]"
          >
            <p>
              Доставка на следующий день — для заказов, сделанных до 16:00 текущего дня.<br>
              Заказ, сделанный после 16:00, доставляется через 1 рабочий день.<br>
              Интервалы доставки:<br>
              ПН-ПТ: 9-16, 17-22, 19-22. СБ: 9-16<br>
              Прием заказов с 9 до 20 
            </p>
          </DeliveryCard>
        </div>
      </div>
    </div>
    
    <div class="spacer mb-5"></div>
  </main>
</template>

<style lang="scss" scoped>
.slider {
  height: 560px;
  margin-bottom: 20px;
}

.box {
  background-color: #74d2ff;
  height: 100%;
  width: 100%;
}

.spacer {
  height: 30px;
}
</style>
