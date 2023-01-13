<template>
    <transition :name="transitionEffect">
        <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
            <img :src="slide" /> <!-- Просто временно наполнение, чтобы было видно, что слайдер работает. Можно заменить чем-угодно -->
        </div>
    </transition>
</template>

<script>
export default {
    emits: ['mouseenter', 'mouseout'],
    props: {
        slide: {
            required: true
        },
        currentSlide: {
            type: Number,
            default: true
        },
        index: {
            type: Number,
            required: true
        },
        direction: {
            type: String,
            required:true
        }},
    computed: {
        transitionEffect() {
            return this.direction === "right" ? "slide-out" : "slide-in";
        }
    }

}
</script>

<style scoped>

/* Позже удалить за ненадобностью */
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.carousel-item {
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block; /* Почему я вообще должен это обозначать? Не удалять, иначе всё оторвётся*/
} 
.slide-out-leave-active,
.slide-out-enter-active,
.slide-in-enter-active,
.slide-in-leave-active {
    width: inherit;
    transition: all 1s ease-in-out;
}

.slide-in-enter-from {
    transform: translateX(-100%); 
}

.slide-in-leave-to {
    transform: translateX(100%);
}

.slide-out-enter-from {
    transform: translateX(100%); 
}

.slide-out-leave-to {
    transform: translateX(-100%);
}

</style>