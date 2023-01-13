<script>
export default {
    props: {
        inputPlaceholder: {
            type: String,
            required: true
        },
        modelValue:{
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <input class="input" type="text" :placeholder="inputPlaceholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>


<style lang="scss" scoped>
.input{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #656565;
    &::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #656565;
    }
}
</style>