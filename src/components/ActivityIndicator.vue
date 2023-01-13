<template>
  <div class="activity-indicator"></div>
</template>

<style lang="scss" scoped>
.activity-indicator {
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3ee0ed;
    border-color: #3ee0ed transparent #3caee6 transparent;
    animation: ldsdualring 1.2s linear infinite;
  }
}

@keyframes ldsdualring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>