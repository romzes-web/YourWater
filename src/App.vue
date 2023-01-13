<script setup>
import { RouterView } from 'vue-router'
import VueHeader from './components/Header.vue'
import VueFooter from './components/Footer.vue'
import VueAdvantage from './components/AdvantageCard.vue'

</script>

<template>
  <VueHeader/>
  <RouterView/>
  <VueFooter/>

</template>

<style lang="scss" scoped>
</style>
