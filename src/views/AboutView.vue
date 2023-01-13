<script setup>
import Heading from '../components/Heading.vue'
</script>

<template>
  <main id="page-about">
    <div class="container my-lg-5">
      <div class="row">
        <div class="col-12">
          <section class="row mb-4">
            <div class="col-12">
              <Heading title="О питьевой воде"/>
              <div class="content px-lg-2 pt-2">
                <p>
                  В самом центре Карельского перешейка находится поселок Стеклянный.
                  Там, среди вековых сосен и древних озер, мы добываем артезианскую воду «Plesca».
                  Из скважины глубиной 185 метров вода «Plesca» поступает в ваши дома, офисы и школы,
                  не потеряв ни капли своей пользы. Розлив воды происходит рядом с местом добычи
                  в произведенную нами тару, что соответствует требованиям ВОЗ по запрету транспортировки
                  воды к месту бутилирования. Мы контролируем качество продукции на каждом этапе ее
                  создания.
                </p>
                <p>В г. Санкт-Петербург можно заказать воду двух видов:</p>
                <div class="row mb-5">
                  <div class="col-6">
                    <div class="water-info">
                      <img src="/images/bottle-nat-tr.png" alt="Plesca Натуральная">
                      <h3>Plesca Натуральная</h3>
                      <p>
                        Вода «Plesca Натуральная» — подходит для повседневного употребления в любом виде.
                        Содержит комплекс веществ, необходимых для здоровья городских жителей.
                      </p>
                      <p>Глубина источника гарантирует неизменный состав воды.</p>
                      <p>Содержит природный комплекс полезных веществ: кальций, магний, калий, натрий.</p>
                      <p>Подходит для готовки, ежедневного употребления без ограничений.</p>
                      <p>Соответствует нормативам качества.</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="water-info">
                      <img src="/images/bottle-cls-tr.png" alt="Plesca Классическая">
                      <h3>Plesca Классическая</h3>
                      <p>
                        Вода «Plesca Классическая» — смягченная артезианская вода, оптимальный выбор для
                        офисов и предприятий. Подходит для использования в кулерах, чайниках и кофе-машинах.
                      </p>
                      <p>Отсутствие накипи и осадка при кипячении, щадящее воздействие на бытовую технику.</p>
                      <p>Идеально подходит для использования в кулерах, чайниках и кофе-машинах.</p>
                      <p>Рекомендована для ежедневного употребления.</p>
                      <p>Имеет сертификаты качества.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="row mb-4">
            <div class="col-12">
              <Heading title="5 причин, почему нужно выбрать именно нас"/>
              <div class="content px-lg-2 pt-2">
                <div class="benefit-item">
                  <img src="/images/icons/pt-1.png" alt="Здоровье">
                  <p>
                    Здоровье: «Plesca» содержит полезные микроэлементы,
                    поддерживающие энергию и бодрость организма. Подходит для
                    повседневного употребления в любом виде.
                  </p>
                </div>

                <div class="benefit-item">
                  <img src="/images/icons/pt-2.png" alt="Качество">
                  <p>
                    Качество: добыча и розлив воды (производство питьевой воды)
                    происходит с помощью новейшего российского оборудования. Вся
                    продукция имеет сертификаты качества и соответствия.
                  </p>
                </div>
                
                <div class="benefit-item">
                  <img src="/images/icons/pt-3.png" alt="Вкус">
                  <p>
                    Вкус: прохладу и свежесть воды обеспечивают методы добычи и
                    многоступенчатая очистка.
                  </p>
                </div>
                
                <div class="benefit-item">
                  <img src="/images/icons/pt-4.png" alt="Доверие">
                  <p>
                    Доверие: в Санкт-Петербурге воду «Plesca» выбрали РЖД,
                    АТС Смольного, СПБГУ, магазин «Купишуз», ОборонЭнерго СПб,
                    МУП Гатчина, Дом Ветеранов СПб и другие жители Санкт-Петербурга
                    и области.
                  </p>
                </div>
                
                <div class="benefit-item">
                  <img src="/images/icons/pt-5.png" alt="Польза">
                  <p>
                    Польза: благодаря бережной очистке воды в ней сохраняется
                    оптимальный уровень солей и микроэлементов.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="row mb-4">
            <div class="col-12">
              <Heading title="Наши сертификаты"/>
              <div class="content px-lg-2 pt-2">
                <div class="file-item">
                  <img src="//yourwater.ru/css/img/icon_pdf.png" alt="" width="auto" height="100">
                  <p>
                    <a href="//yourwater.ru/upload/files/Decl_TP_EAES.pdf" target="_blank">
                      <strong>Сертификат соответствия питьевой воды</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#page-about {
  min-height: 100vh;
  font-size: 16px;
}

.benefit-item {
  display: grid;
  grid-template-columns: 50px auto;
  min-height: 65px;
  grid-gap: 14px;

  img {
    width: 100%;
  }
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

.water-info {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  min-height: 500px;

  img {
    max-height: 200px;
  }

  p {
    font-size: 14px;
    width: 100%;
    margin: 0;
  }
}
</style>
