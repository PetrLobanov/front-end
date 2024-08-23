<template lang="pug">
form.product-form
    .product-form__success(v-if="success") Изделие успешно добавленно
    .product-form__body( v-else :key="key")
        FormRow(label="Название" icon="icons/field-name")
            FormInput(v-model="data.name" :error="errors.name")
        FormRow(label="Тип" icon="icons/field-type")
            FormInput(v-model="data.type" :error="errors.type")
        FormRow(label="Номер партии" icon="icons/field-batch")
            FormInput(v-model="data.batch_number" :error="errors.batch_number")
        FormRow(label="ID ответственного сотрудника" icon="icons/field-employee")
            FormInput(v-model="data.responsible_employee_id" type="number" min="0" :error="errors.responsible_employee_id")
        .product-form__hr
        FormRow(label="Статус ассортиментный" icon="icons/field-status")
            FormSelect(v-model="data.assortment_status" :options="filterItem(assortmentStatuses, data.assortment_status)" :error="errors.assortment_status")
        FormRow(label="Кожа" icon="icons/field-leather")
            FormSelect(v-model="data.equipment_leather" :options="filterItem(equipmentLeathers, data.equipment_leather)" :error="errors.equipment_leather")
        FormRow(label="Тип стежки" icon="icons/field-stitch")
            FormSelect(v-model="data.equipment_stitch" :options="filterItem(equipmentStitchs, data.equipment_stitch)" :error="errors.equipment_stitch")
        FormRow(label="Рельсы" icon="icons/field-rails")
            FormSelect(v-model="data.equipment_rails" :options="filterItem(equipmentRails, data.equipment_rails)" :error="errors.equipment_rails")
        FormRow(label="Подлокотник" icon="icons/field-armrest")
            FormSelect(v-model="data.equipment_armrest" :options="filterItem(equipmentArmrests, data.equipment_armrest)" :error="errors.equipment_armrest")
        .product-form__hr
        FormRow(label="Чертежи" icon="icons/field-drawings")
            FormInputFile(v-model="data.drawings" btn-text="Добавить чертеж" multiple :accepts="['image/jpeg','image/gif','image/png', 'application/pdf']"  :error="errors.drawings")
        FormRow(label="Документация" icon="icons/field-documentation")
            FormInputFile(v-model="data.documentation" btn-text="Добавить Документацию" :maxSize="5" :accepts="['application/msword', 'image/jpeg','image/gif','image/png']" :error="errors.documentation" )
        .product-form__hr
        FormRow(label="Особые указания" icon="icons/field-instruction" )
            FormInput(v-model="data.special_instructions" :error="errors.special_instructions")
        FormRow(label="Создатель" icon="icons/field-employee")
            FormInput(v-model="data.creator_employee_id" type="number" min="0" :error="errors.creator_employee_id")
        FormRow(label="Тех.карта" icon="icons/field-technological-map")
            FormInput(v-model="data.technological_map_id" type="number" min="0" :error="errors.technological_map_id")
        .product-form__hr
        .product-form__btns
            .product-form__submit(:class="{'--disabled': loading}" @click="submit()") Отправить
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

let errors: any = reactive({})
const key: Ref<number> =ref(0)
const loading: Ref<boolean> = ref(false)
const success: Ref<boolean> = ref(false)

const submit = async () => {
    if(loading.value) return
    loading.value = true
    let status: any
    let resData: any
    const res = await POST('api/v1/product/create', props.data, { onResponse( { response }) {
        resData = response._data
        status = response.status
    }})
    loading.value = false
    errors = resData?.errors || {}
    key.value++
    if(status === 200) {
        success.value = true
    }
}
</script>

<style lang="sass" scoped>
.product-form
    margin: 35px 0
    &:deep(.form-row__label)
        width: 160px
        height: 40px
    &:deep(.form-input:not(.--error)), &:deep(.form-select:not(.--error))
        border: 1px solid #E8EFF6
        color: rgba(0, 0, 0, 0.87)
    &:deep(.form-input), &:deep(.form-select)
        border-radius: 4px
        background-color: #E8EFF6
        padding: 8px 12px
        font-size: 16px
    &__body
        display: flex
        flex-direction: column
        gap: 30px
    &__hr
        height: 1px
        font-size: 0
        overflow: hidden
        background-color: #C0C9BD
    &__submit
        padding: 11px 25px
        text-align: center
        min-width: 158px
        background-color: #1F5D2F
        border: 1px solid #1F5D2F
        border-radius: 4px
        font-weight: 500
        font-size: 14px
        letter-spacing: 1.25px
        text-transform: uppercase
        color: #FFFFFF
        cursor: pointer
        display: inline-block
        transition: all 0.3s
        &:hover
            background-color: #fff
            color: #1F5D2F
        &.--disabled
            opacity: 0.7
    &__success
        display: flex
        align-items: center
        justify-content: center
        padding: 20px
        height: 200px
</style>