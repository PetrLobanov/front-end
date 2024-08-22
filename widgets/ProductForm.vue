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
        FormRow(label="Рельсы" icon="icons/field-rails")
            FormSelect(v-model="data.equipment_rails" :options="filterItem(equipmentRails, data.equipment_rails)")
        FormRow(label="Подлокотник" icon="icons/field-armrest")
            FormSelect(v-model="data.equipment_armrest" :options="filterItem(equipmentArmrests, data.equipment_armrest)")
        .product-form__hr
        FormRow(label="Чертежи" icon="icons/field-drawings")
            FormInputFile(v-model="data.drawings" btn-text="Добавить чертеж" multiple :accepts="['image/jpeg','image/gif','image/png', 'application/pdf']" )
</template>

<script lang="ts" setup>
import FormRow from '~/widgets/forms/FormRow.vue'
import FormInput from '~/shared/ui/forms/FormInput.vue'
import FormSelect from '~/shared/ui/forms/FormSelect.vue'
import FormInputFile from '~/shared/ui/forms/FormInputFile.vue'
import { assortmentStatuses, equipmentLeathers, equipmentStitchs, equipmentRails, equipmentArmrests } from '~/helpers/products'


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