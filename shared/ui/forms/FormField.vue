<template lang="pug">
.form-field
    slot
    .form-field__error(v-if="error") {{ error }}
</template>

<script lang="ts" setup>
const props: any = defineProps<{
    error?: string,
}>()

</script>

<style lang="sass" scoped>
.form-field
    display: flex
    flex-direction: column
    gap: 5px
    &__error
        font-weight: 500
        font-size: 14px
        line-height: 22px
        color: var(--red-500-color)

</style>