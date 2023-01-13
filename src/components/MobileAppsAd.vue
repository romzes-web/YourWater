<template>
  <div class="w-100 mobappad">
    <div class="row">
      <div class="col-12 mobappad-header">
        <span>Мобильное приложение</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mobappad-body">
        <p>Совершайте online-заказы с вашего смартфона из любой точки столицы и в любое время суток.</p>
      </div>
    </div>
    <div class="row mobappad-badges">
      <div class="col-6">
        <a href="http://" style="margin-right: auto;">
          <img src="/images/app-badge-ios.png" alt="ios app">
        </a>
      </div>
      <div class="col-6">
        <a href="http://">
          <img src="/images/app-badge-android.png" alt="android app">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobappad {
  background: rgba(255, 255, 255, .35);
  border: 1px solid #128EC9;
  border-radius: 20px;
  padding: 24px;

  & &-header {
    margin-bottom: 16px;

    span {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      text-transform: uppercase;
      color: #444444;
    }
  }

  & &-body {
    margin-bottom: 18px;

    p {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #444444;
      margin: 0;
    }
  }

  & &-badges {

    div {
      justify-content: center;
      align-items: center;
      display: flex;
    }

    img {
      width: 100%;
    }
  }
}
</style>
