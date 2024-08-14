<template lang="pug">
.table-sort
    .table-sort__content(v-if="model.length")
        .table-sort__item.--selected(v-for="(col, index) in model")
            .table-sort__between
                | {{ col.name }}
                TableSortDirection(:column="col")
            img.table-sort__del(src="/icons/del.svg" alt="" @click="delColumn(index)")
        .table-sort__add.--hover(v-if="unusedColumns.length" @click="showSelect = !showSelect")
            img(src="/icons/table-bird.svg" alt="")
            | Добавить поле
        .table-sort__item.--hover(v-if="showSelect" v-for="col in unusedColumns" @click="addColumn(col); showSelect = false") {{ col.name }}
    .table-sort__empty(v-else)
        .table-sort__item.--hover(v-for="col in props.columns" @click="addColumn(col)") {{ col.name }}
</template>

<script lang="ts" setup>
import type { TableColumn, SortColumn } from '~/helpers/interfaces'
import TableSortDirection from '~/widgets/table/TableSortDirection.vue'

const props = defineProps<{
    modelValue: TableColumn[],
    columns: [],
}>()
const emit = defineEmits(['update:modelValue'])
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
</script>

<style lang="sass" scoped>
.table-sort
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
