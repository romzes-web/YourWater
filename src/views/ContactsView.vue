<script setup>
import Heading from '../components/Heading.vue'
</script>

<template>
  <main id="page-contacts">
    <div class="container mt-lg-5">
      <section class="row mb-4">
        <div class="col-12">
          <Heading title="Заказ оборудования"/>
          <div class="content px-lg-2 pt-2">
            <ol>
              <li>По телефону в Санкт-Петербурге: <a href="tel:+78129477993">+7 (812) 947-79-93</a></li>
              <li>С помощью быстрой <a href="/catalog/1/" target="_self">Online-заявки</a> на сайте</li>
              <li>В онлайн-консультанте на сайте</li>
              <li>Через любую удобную соцсеть</li>
            </ol>
            <p>
              Доставка в тот же день производится для заказов, сделанных до 12:00 этого дня.
              <br>
              Доставка на следующий день — для заказов, сделанных до 16:00 текущего дня. Заказ,
              сделанный после 16:00, доставляется через 1 рабочий день.
              <br>
              Доставка возможна в один из интервалов:
              <br>
              ПН-ПТ: 9-16, 17-22, 19-22 СБ: 9-16
            </p>
            <p>
              e-mail: <a href="mailto:info@yourwater.ru">info@yourwater.ru</a>
              <br>
              Группа ВКонтакте:
              <a href="//vk.com/yourwater" target="_self">
                <svg
                  style="width: 16px;"
                  class="svg-inline--fa fa-vk fa-w-18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="vk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"></path>
                </svg>
                yourwater
              </a>
              <br>
              Адрес Склада: г. Санкт-Петербург, ул. Степана Разина д. 9
            </p>
          </div>
        </div>
      </section>
      <section class="row mb-4">
        <div class="col-12">
          <Heading title="Контроль качества"/>
          <div class="content px-lg-2 pt-2">
            <p>+7 (911) 942-75-50 - Надобников Дмитрий Владимирович</p>
          </div>
        </div>
      </section>
      <section class="row mb-4">
        <div class="col-12">
          <Heading title="Карта доставки"/>
          <div class="content px-lg-2 pt-2">
            <div
              id="map"
              class="ymap"
              style="width: 100%; height: 500px;"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#page-contacts {
  min-height: 100vh;

  ol {
    padding-left: 18px;
  }

  p, li, a {
    font-size: 16px;
  }
}
</style>
