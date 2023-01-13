<script>
export default {
  props: {
    elements: {
      required: true
    }
  }
}
</script>

<template>
<div
  class="main-carousel"
  data-flickity="{ 'cellAlign': 'left', 'contain': true }"
>
  <div class="carousel-cell">
    <img class="img" src="src/assets/water.png">
  </div>
    <div class="carousel-cell">
      <img class="img" src="src/assets/water.png">
    </div>
    <div class="carousel-cell">
      <img class="img" src="src/assets/water.png">
    </div>
  </div>
</template>

<style scoped>
.img {
  border-radius: 0 20px 20px 20px;
  border: 1px solid rgb(45, 125, 179);
}

.main-carousel {
  width: 705px;
  /* full width */
  height: 560px;
  /* height of carousel */
  margin-right: 10px;
  margin: 60px;
}

.carousel-cell {
  width: 705px;
  /* full width */
  height: 560px;
  /* height of carousel */
  margin-right: 10px;
}
</style>