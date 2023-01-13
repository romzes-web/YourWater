<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
}
</style>
