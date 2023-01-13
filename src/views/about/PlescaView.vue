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
                    <img class="plk-nat" src="/images/plc-nat.png" alt="Plesca Натуральная">
                  </div>
                  <p class="col-9" style="text-align: justify;">
                    Вода «Plesca Натуральная» — артезианская питьевая вода из скважин Карельского
                    перешейка. Содержит полезные микроэлементы, поддерживающие энергию и бодрость
                    организма. Подходит для повседневного употребления в любом виде. Розлив воды
                    происходит рядом с местом добычи, непосредственно на нашем производстве.
                    Там же мы изготавливаем собственную тару. Так мы контролируем качество продукции
                    на каждом этапе ее создания.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Преимущества питьевой воды Plesca Натуральная:" />
              <div class="content px-lg-2 pt-2">
                <div class="row mb-5">
                  <ul>
                    <li>Глубина источника гарантирует неизменный состав воды.</li>
                    <li>Содержит природный комплекс полезных веществ: кальций, магний, калий, натрий.</li>
                    <li>Подходит для ежедневного употребления без ограничений.</li>
                    <li>Соответствует нормативам качества.</li>
                    <li>Благодаря чистоте водоносных пластов вода не подвергается обнулению и дополнительным химическим обогащениям.</li>
                  </ul>
                  <p>Питьевая вода разливается в тару 19 литров. Мы предлагаем воду в оборотной и одноразовой упаковке.</p>
                  <p>«Plesca Натуральная» — здоровье в каждой капле!</p>
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
                  У нас Вы можете заказать доставку бутилированной воды в СПб «Plesca Натуральная»
                  на дом и в офис.
                </p>
                <p>Заказать воду без залога за бутылку можно по телефон: +7 (812) 947-79-93.</p>
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

.plk-nat {
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
