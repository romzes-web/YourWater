<script setup>
import Heading from '../../components/Heading.vue'
</script>

<template>
  <main id="page-water">
    <div class="container my-lg-5">
      <div class="row">
        <div class="col-12">
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="О воде" />
              <div class="content px-lg-2 pt-2">
                <div class="row mb-5">
                  <div class="col-3">
                    <img class="plс-class" src="/images/plc-classic.png" alt="Plesca Классическая">
                  </div>
                  <p class="col-9" style="text-align: justify;">
                    Вода «Plesca Классическая» — смягченная артезианская вода из скважин Карельского
                    перешейка, оптимальный выбор для офисов и предприятий. Подходит для
                    использования в кулерах, чайниках и кофе-машинах.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="PLESKA Классическая выбирают за её качества:" />
              <div class="content px-lg-2 pt-2">
                <div class="row mb-5">
                  <ul>
                    <li>
                      Отсутствие накипи и осадка при кипячении, щадящее воздействие на бытовую
                      технику.
                    </li>
                    <li>Идеально подходит для использования в кулерах, чайниках и кофе-машинах.</li>
                    <li>Рекомендована для ежедневного употребления.</li>
                    <li>Соответствует нормативам качества.</li>
                  </ul>
                  <p>
                    Розлив воды происходит рядом с местом добычи, непосредственно на нашем
                    производстве. Там же мы изготавливаем собственную тару. Так мы контролируем
                    качество продукции на каждом этапе ее создания.
                  </p>
                  <p>
                    «Plesca Классическая» - это питьевая вода 19 л. с доставкой, которая обладает
                    следующими качествами:
                  </p>
                  <ul>
                    <li>Выгодная цена;</li>
                    <li>Многоступенчатая очистка воды;</li>
                    <li>Стерильный розлив;</li>
                    <li>Антибактериальная обработка;</li>
                    <li>Сертификация ЕАС.</li>
                  </ul>
                  <p>Вода производится в оборотной и одноразовой таре емкостью 19 л.</p>
                  <p>Наше здоровье зависит от того, что мы пьем!</p>
                </div>
              </div>
            </div>
          </section>
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Наши сертификаты" />
              <div class="content px-lg-2 pt-2">
                <div class="file-item">
                  <img src="//yourwater.ru/css/img/icon_pdf.png" alt="" width="auto" height="100">
                  <p>
                    <a href="//yourwater.ru/upload/files/Decl_TP_EAES.pdf" target="_blank">
                      <strong>Сертификат соответствия питьевой воды</strong>
                    </a>
                  </p>
                </div>
                <p>
                  Заказать питьевую воду «Plesca Классическая» без залога за бутылку
                  в Санкт-Петербурге: +7 (812) 947-79-93.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
  
<style lang="scss" scoped>
#page-water {
  min-height: 100vh;
  font-size: 16px;
}

ul {
  margin-left: 16px;
}

.plс-class {
  width: 300px;
  height: auto;
}

.file-item {
  display: grid;
  grid-template-columns: 50px auto;
  min-height: 65px;
  grid-gap: 14px;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
