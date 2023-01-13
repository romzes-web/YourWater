<script>
export default {
  props: {
    image_url: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    }
  }
}
</script>

<template>
  <div class="advantage-card">
    <div class="advantage-card__image-container">
      <img v-bind:src="image_url" alt="Image">
    </div>
    <p>{{text}}</p> 
  </div>
</template>
  
<style lang="scss" scoped>
.advantage-card {
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, .6);
  border-radius: 20px;
  padding: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 12px -2px rgba(116, 210, 255, .5);

  &__image-container {
    width: 125px;
    height: 125px;
    flex-shrink: 0;
    border: 1px solid #74D2FF;
    border-radius: 50%;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }

  p {
    color: #656565;
    margin-left: 25px;
    font-family: 'Lato Bold';
    font-size: 16px;
    line-height: 140%;
  }
}

@media only screen and (max-width: 1200px) {
  .advantage-card{
    max-height: 160px;

    &__image-container {
      width: 120px;
      height: 120px;
    }
  }
}

@media only screen and (max-width: 992px) {
  .advantage-card {
    max-height: 200px;

    &__image-container {
      width: 140px;
      height: 140px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .advantage-card {
    max-height: 200px;
    padding: 20px;
  }
}

@media only screen and (max-width: 576px) {
  .advantage-card {
    max-height: 160px;
    padding: 20px;

    &__image-container {
      width: 120px;
      height: 120px;
    }

    & p {
      color: #656565;
      margin-left: 20px;
      font-size: 14px;
      line-height: 120%;
    }
  }
}
</style>
