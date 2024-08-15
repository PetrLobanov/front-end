<template lang="pug">
.table-filter
    .table-filter__content(v-if="model.length")
        .table-filter__item.--selected(v-for="(col, index) in model")
            .table-filter__between
                FormSelect(:options="unusedColumns" :current="col" option-attribute="name" @update:modelValue="onUpdate($event, index)")
                FormSelect(v-model="col.operator" :options="getOperatorsbyType(col.type)")
                FormInput(v-model="col.value")
            img.table-filter__del(src="/icons/del.svg" alt="" @click.stop="delColumn(index)")
        .table-filter__add.--hover(v-if="unusedColumns.length" @click.stop="showSelect = !showSelect")
            img(src="/icons/table-bird.svg" alt="")
            | Добавить поле
        .table-filter__item.--hover(v-if="showSelect" v-for="col in unusedColumns" @click="addColumn(col); hideSelect()") {{ col.name }}
    .table-filter__empty(v-else)
        .table-filter__item.--hover(v-for="col in props.columns" @click.stop="addColumn(col)") {{ col.name }}
</template>

<script lang="ts" setup>
import type { TableColumn, FilterItem, TableColumnType } from '~/helpers/interfaces'
import { operatorsOptions } from '~/helpers/helpers'
import TableSortDirection from '~/widgets/table/TableSortDirection.vue'
import FormInput from '~/shared/ui/forms/FormInput.vue'
import FormSelect from '~/shared/ui/forms/FormSelect.vue'

const props = defineProps<{
    modelValue: TableColumn[],
    columns: [],
}>()
const emit = defineEmits(['update:modelValue', 'updateFilter'])
const model: ComputedRef<TableColumn[]> = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
})

const addColumn = (col: FilterItem) => {
    col.value = ''
    col.operator = operatorsOptions[col.type][0]
    model.value.push(col)
}

const delColumn = (index: number) => {
    model.value.splice(index, 1)
}

const columnsNames: ComputedRef<string[]> = computed(() => {
    return model.value.map( (col:TableColumn)  => col.name)
})

const unusedColumns: ComputedRef<TableColumn[]> = computed(() => {
    return props.columns.filter((col:TableColumn) => !columnsNames.value.includes(col.name))
})

const getOperatorsbyType = (type: TableColumnType) => {
    return operatorsOptions[type]
}

const showSelect: Ref<boolean> = ref(false)

const onUpdate = (val: FilterItem, index: number) => {
    emit('updateFilter', val, index)
}

const hideSelect = () => {
    setTimeout(() => {
        showSelect.value = false
    }, 50)
}
</script>

<style lang="sass" scoped>
.table-filter
    img
        max-width: none
    &__item, &__add
        display: flex
        align-items: center
        gap: 5px
        white-space: nowrap
        &.--hover
            cursor: pointer
            &:hover
                color: #000
    &__item
        padding: 5px 15px
        color: #1B1716
        &.--hover:hover
            background-color: #2C6A3C24
        &.--selected
            justify-content: space-between
    &__between
        flex: 1
        display: flex
        align-items: center
        justify-content: space-between
        gap: 25px
    &__add
        margin: 0 15px
        color: #36515B
        padding: 10px 0
        border-top: 1px solid #C0C9BD
    &__del
        cursor: pointer
</style>
