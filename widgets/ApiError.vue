<template lang="pug">
.l-api-error(v-if="showErrors")
    .l-api-error__item(v-for="error in apiErrors")
        .l-api-error__url {{ error.url }}
        .l-api-error__text(v-if="error.text") {{ error.text }}
        .l-api-error__text(v-for="text in error.rows") {{ text }}
</template>

<script lang="ts" setup>
import { apiErrors } from '~/store/common'

const route = useRoute()
const disalowPaths = [
    '/auth'
]
const showErrors: ComputedRef = computed(() => {
    const path = route.fullPath
    return !disalowPaths.includes(path)
})
let timer: any = null
watch(apiErrors, (val) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        apiErrors.length = 0
    }, 4000)
})
</script>

<style lang="sass" scoped>
.l-api-error
    position: fixed
    right: 0
    bottom: 0
    padding: 20px
    display: flex
    flex-direction: column
    gap: 10px
    &__item
        padding: 10px
        background: var(--gray-50-color)
        border: 1px solid var(--red-500-color)
        border-radius: 6px
        font-size: 13px
    &__url
        font-size: 11px
        margin: 0 0 5px 0
    &__text
        color: var(--red-500-color)
</style>


