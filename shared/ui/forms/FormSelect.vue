<template lang="pug">
FormField(:error="error")
    DropDown.form-select(:class="{'--error': error}")
        template(#trigger)
            img(v-if="leftIcon" :src="`icons/${leftIcon}`" :name="leftIcon").form-select__icon
            .form-select__input
                span {{ getCurrenVal() }}
                img.form-select__icon(src="/icons/table-bird.svg" alt="")
        .form-select__dropdown-box
            .form-select__option(v-for="option in props.options" @click.stop="setOption(option)") {{ getOptionVal(option) }}
</template>

<script lang="ts" setup>
import FormField from '~/shared/ui/forms/FormField.vue'
import DropDown from '~/shared/ui/DropDown.vue'
import { isString } from '~/helpers/helpers'

export interface Props {
    modelValue?: any,
    current?: any,
    options: any[],
    error?: any,
    leftIcon?: string,
    optionAttribute?: string
}
const props = withDefaults(defineProps<Props>(), {
    optionAttribute: 'label',
    valueAttribute: 'value',
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

let defaultVal: any = ''
if (!isString(props.modelValue)) {
    defaultVal = {}
    defaultVal[props.optionAttribute] = ''
}

const currOption: Ref<any> = ref(model && model.value ? model : defaultVal)
const setOption = (option: any) => {
    currOption.value = option
    emit('update:modelValue', option)
}

const getCurrenVal = () => {
    let res = currOption.value[props.optionAttribute] || (props.current ? props.current[props.optionAttribute] : (currOption.value || '-') )
    return res
}

const getOptionVal = (option: any) => {
    return option[props.optionAttribute] || option
}
</script>

<style lang="sass" scoped>
.form-select
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5px 6px
    gap: 5px
    background-color: var(--gray-50-color)
    border: 1px solid var(--gray-300-color)
    font-size: 16px
    &:deep(.dropdown__trigger)
        width: 100%
    &.--error
        color: var(--red-500-color)
        border-color: var(--red-500-color)
    &__input
        width: 100%
        display: flex
        align-items: center
        justify-content: space-between
        gap: 25px
        font-size: 14px
        line-height: 21px
        color: var(--gray-900-color)
        min-width: 6em
        &::placeholder
            color: var(--gray-300-color)
        span
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
    &__icon, &:deep(svg)
        max-width: none
        width: 12px
        height: 12px
        color: var(--gray-500-color)
    &__option
        padding: 5px 15px
        color: #1B1716
        cursor: pointer
        &:hover
            background-color: #2C6A3C24
    &:deep(.dropdown__box)
        width: 100%
</style>
