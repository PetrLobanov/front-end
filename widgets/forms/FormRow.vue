<template lang="pug">
.form-row
    .form-row__label
        .form-row__label-icon
            SpriteIcon(v-if="props.icon" :name="props.icon")
        span {{ label }}
    .form-row__input
        slot

</template>

<script lang="ts" setup>
import SpriteIcon from '~/shared/ui/SpriteIcon.vue'

const props = defineProps<{
    label: string,
    error?: any,
    icon?: string,
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
        align-items: top
        gap: 0.5em
        &-icon
            color: inherit
            width: 1em
            height: 1em
            margin-top: 2px

    &__input
        flex: 1
</style>