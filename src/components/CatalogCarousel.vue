<script>
import SliderItem from './SliderItem.vue'
import IconArrowLeft from './icons/IconArrowLeft.vue'
import IconArrowRight from './icons/IconArrowRight.vue'

export default {
  components: {
    SliderItem,
    IconArrowLeft,
    IconArrowRight
  },
  props: {
    activeQnt: { // Количество активных карточек
      type: Number,
      required: true
    },
    fadedNext: { // Будет ли полупрозрачным показываться следующая карта
      type: Boolean,
      default: true
    },
    gap: { // Промежуток между картами 
      type: String,
      required: true
    },
    items: { // Массив с непосредственным контентом
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlide: 0,
      direction: 'left',
    }
  },
  methods: {
    next() {
      if (this.currentSlide < (this.items.length - this.activeQnt)) {
        this.direction = 'slide-right' // Проигрывает Vue transition для перемотки вправо
        this.currentSlide += 1
      }
    },
    prev() {
      if (this.currentSlide > 0) {
        this.direction = 'slide-left' // Проигрывает Vue transition для перемотки вправо
        this.currentSlide -= 1
      }
    }
  }
}
</script>

<template>
  <div class="CatalogSlider">
    <button
      @click="next"
      class="button_next"
    >
      <IconArrowRight/>
    </button>

    <button
      @click="prev"
      class="button_prev"
    >
      <IconArrowLeft/>
    </button>

    <TransitionGroup :name="this.direction">
      <SliderItem
        v-for="(item, i) in items" 
        :key="item.id"
        :content="item"
        :index="i"
        :current-slide="currentSlide"
        :activeQnt="activeQnt"
        :fadedNext="fadedNext"
        :margin="gap"
      />
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
button {
  position: absolute;
  width: 55px;
  height: 55px;
  top: 45%;
  z-index: 500;
  border-radius: 20px;
  border: none;
}

.button_next svg,
.button_prev svg {
  width: 16px;
  height: 14px;
}

.button_next {
  right: calc(-15px + v-bind(gap));
}

.button_prev {
  left: -15px;
}

.button_prev, .button_next {
  
  background-color: rgba(18, 143, 201, 0.75);

  &:hover {
    background-color: #128EC9;
  }
}

.CatalogSlider {
  display: flex;
  overflow-x: visible;
  max-width: 100%;
  /*
    Bootstrap иногда добавляет свои паддинги. Когда его нет, меняются отступы.
    Однако, с ними и красивие, и не возникает разногласий, поэтому они добавлены перманентно
  */
  padding: 0 calc(var(--bs-gutter-x) * 0.5) 0 calc(var(--bs-gutter-x) * 0.5);
}

.slide-right-move, .slide-left-move {
  transition: all 0.35s ease;
}

.slide-left-enter-from {
  transform: translateX(-10%) !important;
  opacity: 0.1;
}

.slide-right-enter-from {
  transform: translateX(100%) !important;
  opacity: 0 !important;
}

.slide-right-leave-active  {
  position: absolute;
  transition: all 0.15s ease;
  /* transform: translateX(-20%); */
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(-5%) !important;
  opacity: 0.1;
  /* transform: translateX(-100%); */
}

.slide-left-leave-active  {
  position: absolute;
  transform: translateX(300%);
  transition: all 0.35s ease;
  opacity: 0;
}

.slide-left-leave-to {
  opacity: 0 !important; /* Нужен Important, т.к. прозрачность элемета описывается в DOM`e внутри тега в компоненте SliderItem */
}
</style>
