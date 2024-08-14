<template lang="pug">
.table-filter.flex
    .table-filter__item.flex
        img.table-filter__item--img(src="/icons/closed-eye.svg" alt="")
        span.table-filter__title Спрятать поля
    .table-filter__item.flex
        img.table-filter__item--img(src="/icons/table.svg" alt="")
        span.table-filter__title Табличный вид
        img.table-filter__item--img-help(src="/icons/table-bird.svg" alt="")
    .table-filter__item.flex
        img.table-filter__item--img(src="/icons/filter.svg" alt="")
        span.table-filter__title Фильтры
    .table-filter__item.flex
        img.table-filter__item--img(src="/icons/group.svg" alt="")
        span.table-filter__title Сгруппировать
    DropDown.table-filter__item.flex
        template(#trigger)
            img.table-filter__item--img(src="/icons/sort.svg" alt="")
            span.table-filter__title Сортировка
        .table-filter__dropdown-box
            TableSort(:columns="columns" v-model="sort")
</template>

<script lang="ts" setup>
import type { TableColumn } from '~/helpers/interfaces'
import DropDown from '~/shared/ui/DropDown.vue'
import TableSort from '~/widgets/table/TableSort.vue'

const  columns: TableColumn[] = [{ name: 'Наименование', type: 'string'}, { name: 'Количество', type: 'number'}, { name: 'Дата', type: 'date'}, { name: 'Статус', type: 'status'}, ]
const sort: TableColumn[] = reactive([])
</script>

<style lang="sass" scoped>
.table-filter
    padding-bottom: 26px
    &__item
        padding-left: 16px
        padding-right: 16px
        cursor: pointer
        align-items: center
    &__title
        font-weight: 500
        text-transform: uppercase
        font-size: 14px
        white-space: nowrap
    &__item--img
        padding-right: 8px
    &__item--img-help
        padding-left: 8px
    &:deep(.dropdown__trigger)
        display: flex
        align-items: center
    &__dropdown-box
        cursor: default
</style>