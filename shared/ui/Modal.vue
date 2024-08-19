<template lang="pug">
Teleport(v-if="model" to="body")
    .modal__wrapper(@click="model = false")
        .modal
            .modal__close
                SpriteIcon(name="icons/del")
            .modal__main(@click="($event) => { $event.stopPropagation() }")
                .modal__header
                    slot(name="header")
                .modal__box
                    slot
</template>

<script lang="ts" setup>
import type { ModelRef } from 'vue'
import { keyPress, keyPressCode } from '~/store/common'
import SpriteIcon from '~/shared/ui/SpriteIcon.vue'

const props = defineProps<{
    modelValue: boolean,
}>()
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
})

watch(keyPress, () => {
    const key = keyPressCode.value
    if (key === 27 ) {
        model.value = false
    }
})
</script>

<style lang="sass" scoped>
.modal
    display: flex
    flex-direction: column
    align-items: stretch
    max-width: 90vw
    width: 728px
    position: relative
    &__wrapper
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        overflow: auto
        background-color: rgb(15%, 15%, 16%, 0.46)
    &__main
        border-radius: 20px
        overflow: hidden
    &__close
        position: absolute
        right: 0
        top: 0
        background-color: #1F5D2F
        color: #fff
        width: 52px
        height: 52px
        margin-right: -26px
        margin-top: -26px
        cursor: pointer
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center
        transition: background-color 0.5S
        &:deep(svg)
            width: 24px
            height: 24px
        &:hover
            color: #1F5D2F
            background-color: #FFF

    &__header
        background-color: #F3F6FB
        padding: 20px 25px
        font-size: 20px
        border-bottom: 1px solid #C0C9BD
        background-image: url(/images/modal-hd-bg.svg)
        background-position: right bottom
        background-repeat: no-repeat

    &__box
        padding: 0 25px
        background-color: #fff
        overflow: auto
        max-height: calc(90vh - 70px)
</style>