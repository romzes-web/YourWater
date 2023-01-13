<script>
export default {
    props: {
        announcements: {
            type: Array,
            require: true,
            default: () => [
                { date: '4 ноября', text: 'доставка работает только днём, с 9.00 до 16.00' },
                { date: '5-6 ноября', text: 'выходные дни, доставка осуществляться не будет.' },
                { date: 'С 7 ноября', text: 'работаем в обычном режиме' },
            ]
        }
    }
}
</script>

<template>
    <div class="announcement-card">
        <div class="announcement-card__wrapper">
            <div class="announcement-card__img"></div>
            <div class="announcement-card__content">
                <p class="announcement-card__title">ДОСТАВКА В НАЧАЛЕ НОЯБРЯ</p>
                <p class="announcement-card__text" v-for="announcement in announcements" :key="announcement.date"><strong>{{announcement.date}}</strong> {{announcement.text}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.announcement-card {
    width: 100%;
    background-color: rgba(255, 255, 255, .6);
    border: 1px solid rgba(116, 210, 255, .6);
    border-radius: 20px;

    &__wrapper {
        display: flex;
        justify-content: start;
        padding: 35.46px 34px;
    }

    &__img {
        height: 115.07px;
        width: 33.07px;
        background-image: url('/AnnooncementImg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        @media screen and (max-width: 1440px) {
            background-position: top;
        }
    }

    &__content {
        margin: auto 0 auto 30px;

        @media screen and (max-width: 375px) {
            margin-left: 20px;
        }
    }

    &__title {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #128EC9;
        text-transform: uppercase;
        margin-bottom: 20px;

        @media screen and (max-width: 375px) {
            font-size: 14px;
            line-height: 14px;
        }
    }

    &__text {
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #000000;

        @media screen and (max-width: 375px) {
            font-size: 12px;
            line-height: 17px;
        }
    }
}
</style>