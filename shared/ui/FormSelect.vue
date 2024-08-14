<template lang="pug">
.form-select
    DropDown.table-filter__item.flex
        template(#trigger)
            .form-select__input
                div {{ title }}
                img.form-select__icon(src="/icons/table-bird.svg" alt="")
        .form-select__dropdown-box
            div(v-for="option in props.options" @click="model = option") {{ option.name }}
</template>

<script lang="ts" setup>
import DropDown from '~/shared/ui/DropDown.vue'

const props = defineProps<{
    modelValue?: any,
    options: any[]
}>()
const emit = defineEmits(['update:modelValue'])
const model: any = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    },
})

const title = computed(() => {
    return model.value?.name || ''
})
</script>

<style lang="sass" scoped>
.form-select
    &__input
        display: flex
        gap: 20px
        align-items: center
        width: 100%
        div
            min-width: 50px

</style>
