<template lang="pug">
.table-groups
    .table-groups__content(v-if="model.length")
        .table-groups__item.--selected(v-for="(col, index) in model")
            .table-groups__between
                FormSelect(:options="unusedColumns" :current="col" option-attribute="name" @update:modelValue="onUpdate($event, index)")
                TableSortDirection(:column="col" :key="col.type")
            img.table-groups__del(src="/icons/del.svg" alt="" @click.stop="delColumn(index)")
        .table-groups__add.--hover(v-if="unusedColumns.length" @click.stop="changeShowSelect(true)")
            img(src="/icons/table-bird.svg" alt="")
            | Добавить поле
        .table-groups__item.--hover(v-if="showSelect" v-for="col in unusedColumns" @click.stop="addColumn(col); changeShowSelect()") {{ col.name }}
    .table-groups__empty(v-else)
        .table-groups__item.--hover(v-for="col in props.columns" @click.stop="addColumn(col)") {{ col.name }}
</template>

<script lang="ts" setup>
import type { TableColumn, SortColumn } from '~/helpers/interfaces'
import TableSortDirection from '~/widgets/table/TableSortDirection.vue'
import FormSelect from '~/shared/ui/forms/FormSelect.vue'

const props = defineProps<{
    modelValue: TableColumn[],
    columns: [],
}>()
const emit = defineEmits(['update:modelValue', 'updateGroups'])
const model: ComputedRef<TableColumn[]> = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
})

const addColumn = (col: SortColumn) => {
    col.direction = 'asc'
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

const showSelect: Ref<boolean> = ref(false)

const onUpdate = (val: SortColumn, index: number) => {
    emit('updateGroups', val, index)
}

const changeShowSelect = (val: boolean = false) => {
    setTimeout(() => {
        showSelect.value = val
    }, 50)
}
</script>

<style lang="sass" scoped>
.table-groups
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
        gap: 5px
        &:deep(.form-field)
            width: 115px
            position: relative
            left: 1px
    &__add
        margin: 0 15px
        color: #36515B
        padding: 10px 0
        border-top: 1px solid #C0C9BD
    &__del
        cursor: pointer
</style>
