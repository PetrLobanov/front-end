<template lang="pug">
form.product-form
    .product-form__body
        FormRow(label="Название")
            FormInput(v-model="data.name")
        FormRow(label="Тип")
            FormInput(v-model="data.type")
        FormRow(label="Номер партии")
            FormInput(v-model="data.batch_number")
        FormRow(label="Название")
            FormInput(v-model="data.responsible_employee_id")
        .product-form__hr
        FormRow(label="Статус ассортиментный")
            FormSelect(v-model="data.assortment_status" :options="assortStatuses")
        div(style="margin-top: 100px")
</template>

<script lang="ts" setup>
import FormRow from '~/widgets/forms/FormRow.vue'
import FormInput from '~/shared/ui/forms/FormInput.vue'
import FormSelect from '~/shared/ui/forms/FormSelect.vue'
import { assortmentStatuses } from '~/helpers/helpers'


const props = defineProps<{
    data: any,
}>()

const assortStatuses = computed(()=> {
    return assortmentStatuses.filter( item => item !== props.data.assortment_status )
})
</script>

<style lang="sass" scoped>
.product-form
    margin: 35px 0
    &:deep(.form-row__label)
        width: 160px
        height: 40px
    &:deep(.form-input), &:deep(.form-select)
        border: none
        border-radius: 4px
        background-color: #E8EFF6
        padding: 8px 12px
        font-size: 16px
        color: rgba(0, 0, 0, 0.87)
    &__body
        display: flex
        flex-direction: column
        gap: 30px
    &__hr
        height: 1px
        font-size: 0
        overflow: hidden
        background-color: #C0C9BD



</style>