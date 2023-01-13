<script>
import { RouterLink } from 'vue-router'
import ActivityIndicator from './ActivityIndicator.vue'
import IconSideMenuTriangle from './icons/IconSideMenuTriangle.vue';

export default {
  components: {
    ActivityIndicator,
    IconSideMenuTriangle
  },
  props: {
    role: {
      type: String,
      required: false,
      default: 'nav'
    },
    categories: {
      type: Array,
      required: true
    },
    selected: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>

<template>
  <div class="w-100 categories-list-menu">
    <h3>КАТАЛОГ ТОВАРОВ</h3>
    <div class="list">
      <ActivityIndicator v-if="!categories" class="mx-auto"/>
      <div
        class="list-item"
        v-for="category in categories"
        :key="category.id"
        :class="{'selected': category.id === selected}"
      >
        <RouterLink :to="`/catalog/${category.id}`">
          {{ category.title }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categories-list-menu {
  background: rgba(255, 255, 255, .3);
  border: 1px solid #128EC9;
  border-radius: 20px;
  filter: drop-shadow(0px 0px 10px rgba(116, 210, 255, 0.2));
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  h3 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #444444;
    padding: 30px 30px 0 30px;
    margin-bottom: 20px;
    word-spacing: 2px;
  }

  .list {
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;

    .list-item {

      &:hover {
        background-color: #f5f5f5;
      }
      
      &.selected {
        background-color: #128ec91c;
      }
      
      a {
        display: flex;
        padding: 20px 20px;
        color: #444444;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-decoration: none;
      }

      &:nth-child(1n) a {
        border-top: 1px solid #e3e3e3;
      }
    }
  }
}
</style>
