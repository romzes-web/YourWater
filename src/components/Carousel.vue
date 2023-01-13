<script>
import CarouselItem from './CarouselItem.vue'
import CarouselControls from './CarouselControls.vue'

export default {
  components: {
    CarouselItem,
    CarouselControls
  },
  data() {
    return {
      slides: [
        "/images/slider-tmp-delivery.jpg",
        "/images/slider-tmp-starter.jpg",
        "/images/slider-tmp-arch.png",
      ],
      currentSlide: 0,
      slideInterval: null,
      direction: "right",
    }
  },
  methods: {
    prev() {
      this.currentSlide = this.currentSlide > 0 ? this.currentSlide -1 : this.slides.length - 1 // Если счётчик при убавлении становится меньше нуля, то вместо убавления счётчик приравнивается к количеству слайдов
      this.direction = 'left' // Проигрывает Vue transition для перемотки влево
      this.startSlideTimer();
    },
    next() {
      if (!document.hidden) { // Проверяет, активно ли окно в момент прокрутки. Исправляет баг анимации при возвращении на страницу после долгого времени
        this.currentSlide = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0 // Если номер слайда меньше количества слайдов, то счётких инкриминируется. Иначе, он приравнивается к нулю
        this.direction = 'right' // Проигрывает Vue transition для перемотки вправо
        this.startSlideTimer()
      }
    },
    startSlideTimer() { // Перезапускается при пролистывании, чтобы избежать нежелательных переходов
      this.stopSlideTimer()
      this.slideInterval = setInterval(() => {
        this.next()
      }, 6500)
    },
    stopSlideTimer() { // Сбрасывает таймер автослайда. Отдельная функция выделена для ивентов на @mouseenter
      clearInterval(this.slideInterval)
    }
  },
  mounted() {
    this.startSlideTimer()
  },
  beforeUnmount() {
    this.stopSlideTimer()
  },
  beforeMount() {
    clearInterval(this.slideInterval)
  }
}
</script>

<template>
  <CarouselControls
    @prev="prev"
    @next="next"
  />
  <div class="slidecont">
    <div class="carousel">
      <div class="carousel-inner">
        <CarouselItem
          v-for="(slide,i) in slides" 
          :slide="slide"
          :key="`item-${i}`"
          :current-slide="currentSlide"
          :index="i"
          :direction="direction"
          @mouseenter="stopSlideTimer"
          @mouseout="startSlideTimer"
        />
      </div>
    </div>
  </div> 
</template>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 520px;
}

.slidecont {
  width: 95%;
  height: 520px;
  border: 1px solid #74D2FF;
  border-radius: 0px 20px 20px 20px;
  filter: drop-shadow(0px 0px 60px rgba(116, 210, 255, 0.2));
  backdrop-filter: blur(30px);
  overflow: hidden;
  margin-left: auto;
}
</style>