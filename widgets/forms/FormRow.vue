<template lang="pug">
.form-row
    .form-row__label
        span {{ label }}
    .form-row__input
        slot

</template>

<script lang="ts" setup>
const props = defineProps<{
    label: string,
    error?: any,
    leftIcon?: string,
}>()

</script>

<style lang="sass" scoped>
    .form-row
        display: flex
        gap: 15px
        &__label
            font-size: 14px
            line-height: 20px
            letter-spacing: 0.25px
            color: #404940
            display: flex
            span
                margin: auto 0
        &__input
            flex: 1

</style>