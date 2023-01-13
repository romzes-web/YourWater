<template>
    <button class="slideright" @click="delayedEmit('next')" :disabled="disabled"><ArrowRight /></button>
    <button class="slideleft" @click="delayedEmit('prev')" :disabled="disabled"><ArrowLeft /></button>
</template>

<script>
import ArrowRight from './icons/IconArrowRight.vue';
import ArrowLeft from './icons/IconArrowLeft.vue';



export default {

    emits: ['prev', 'next'],
    data() {
        return {
            disabled: false, // Оба параметра нужны для таймера
            timout: 0
        }
    },
    methods: {
        delayedEmit(emit) { // эмитит название функции, которую нужно выполнить. Но не чаще, чем раз в 1050мс. Чтобы анимация успела проиграться.

            this.disabled = true;
            this.timout = setTimeout(() => {
                this.disabled = false
            }, 1050);

            this.$emit(emit)
        },
        
    },
    components: { ArrowRight,ArrowLeft },

}

</script>

<style scoped>

.slideleft svg, .slideright svg {
    width: 16px;
    height: 14px;
}

.slideleft {
    background:#74D2FF ;
    border-radius: 0 0 0 20px;
    top: 55px;
}

.slideright {
    background: #128EC9;
    border-radius: 20px 0 0 0;

}



.slideleft, .slideright {
    position: absolute;
    cursor: pointer;
    border: none;
    height: 55px;
    width: 55px;
    left: -4px;
    z-index: 9;
    
}

.left {
    border-radius: 20px 0 0 0;
    background: #128EC9;
}

.right {
    top: 55px;
    border-radius: 0 0 0 20px;
    background:#74D2FF ;
}

</style>