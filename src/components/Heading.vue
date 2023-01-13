<script>
import IconHeadingDrop from './icons/IconHeadingDrop.vue'

export default {
  components: {
    IconHeadingDrop
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="heading">
    <h2>{{ title }}</h2>
    <div class="heading__bottom">
      <div class="heading__border-before"></div>
      <div class="drop-wrapper">
        <IconHeadingDrop/>
      </div>
      <div class="heading__border-after"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  h2 {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    color: #444444;
    margin-bottom: 10px;

    @media screen and (max-width: 575px) {
      font-size: 32px;
      line-height: 34px;
    }

    @media screen and (max-width: 375px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  .heading__bottom {
    display: flex;
    align-items: center;
  }

  .heading__border-before {
    border: 1px solid #74D2FF;
    width: 100%;
    max-width: 80px;

    @media screen and (max-width: 575px) {
      max-width: 60px;
    }

    @media screen and (max-width: 375px) {
      display: none;
    }
  }

  .heading__border-after {
    border: 1px solid #74D2FF;
    width: 100%;
  }
    
  .drop-wrapper {
    padding: 0 5px;

    @media screen and (max-width: 375px) {
      padding-left: 0;
    }
  }
}
</style>
