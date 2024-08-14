<template lang="pug">
FormField(:error="error")
    .form-input(:class="{'--error': error}")
        img(v-if="leftIcon" :src="`icons/${leftIcon}`" :name="leftIcon").form-input__icon
        input.form-input__input(type="text" v-model="model" v-bind="$attrs")
        slot
</template>

<script lang="ts" setup>
import FormField from '~/shared/ui/forms/FormField.vue'

const props = defineProps<{
    modelValue: string,
    error?: any,
    leftIcon?: string,
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
</script>

<style lang="sass" scoped>
.form-input
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5px 6px
    gap: 5px
    background-color: var(--gray-50-color)
    border: 1px solid var(--gray-300-color)
    font-size: 16px
    &.--error
        color: var(--red-500-color)
        border-color: var(--red-500-color)
    &__input
        flex: 1
        outline: none
        border: none
        background: none
        font-size: 14px
        color: var(--gray-900-color)
        &::placeholder
            color: var(--gray-300-color)
    &__icon, &:deep(svg)
        width: 20px
        height: 20px
        color: var(--gray-500-color)

</style>
