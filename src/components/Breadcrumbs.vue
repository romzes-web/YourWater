<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    fn() {
      console.log('fn')
    },
  },
  mounted() {
    this.fn()
  },
}
</script>

<template>
  <nav class="vue-breadcrumbs">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="breadcrumb-item active">Library</li>
    </ol>
  </nav>
</template> 

<style lang="scss" scoped>
.vue-breadcrumbs {
  --bs-breadcrumb-divider: '>';

  a {
    text-decoration: none;
  }
}
</style>