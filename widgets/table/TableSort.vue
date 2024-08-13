<template lang="pug">
.table-sort
    .table-sort__content(v-if="model.length")
        .table-sort__item(v-for="(col, index) in model")
            | {{ col.name }} {{ col.type }}
            img.table-sort__del(src="/icons/del.svg" alt="" @click="delColumn(index)")
        .table-sort__add(v-if="unusedColumns.length" @click="showSelect = !showSelect")
            img(src="/icons/table-bird.svg" alt="")
            | Добавить поле
        .table-sort__item(v-if="showSelect" v-for="col in unusedColumns" @click="addColumn(col); showSelect = false") {{ col.name }}
    .table-sort__empty(v-else)
        .table-sort__item(v-for="col in props.columns" @click="addColumn(col)") {{ col.name }}
</template>

<script lang="ts" setup>
import type { TableColumn } from '~/helpers/interfaces'

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

const addColumn = (col: TableColumn) => {
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
const newCol: Ref<TableColumn | null> = ref(null)
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
    &__item
        padding: 5px 0
    &__add
        color: #36515B
        padding: 10px 0
        border-top: 1px solid #C0C9BD
    &__del
        cursor: pointer
</style>
