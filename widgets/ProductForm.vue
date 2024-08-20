<template lang="pug">
form.product-form
    .product-form__body
        FormRow(label="Название" icon="icons/field-name")
            FormInput(v-model="data.name")
        FormRow(label="Тип" icon="icons/field-type")
            FormInput(v-model="data.type")
        FormRow(label="Номер партии" icon="icons/field-batch")
            FormInput(v-model="data.batch_number")
        FormRow(label="ID ответственного сотрудника" icon="icons/field-employee")
            FormInput(v-model="data.responsible_employee_id" type="number" min="0")
        .product-form__hr
        FormRow(label="Статус ассортиментный" icon="icons/field-status")
            FormSelect(v-model="data.assortment_status" :options="filterItem(assortmentStatuses, data.assortment_status)")
        FormRow(label="Кожа" icon="icons/field-leather")
            FormSelect(v-model="data.equipment_leather" :options="filterItem(equipmentLeathers, data.equipment_leather)")
        FormRow(label="Тип стежки" icon="icons/field-stitch")
            FormSelect(v-model="data.equipment_stitch" :options="filterItem(equipmentStitchs, data.equipment_stitch)")
        div(style="margin-top: 100px")
</template>

<script lang="ts" setup>
import FormRow from '~/widgets/forms/FormRow.vue'
import FormInput from '~/shared/ui/forms/FormInput.vue'
import FormSelect from '~/shared/ui/forms/FormSelect.vue'
import { assortmentStatuses, equipmentLeathers, equipmentStitchs } from '~/helpers/products'


const props = defineProps<{
    data: any,
}>()

const filterItem = ( items: string[], current: string) => {
    return items.filter( item => item !== current )
}
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