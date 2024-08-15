<template lang="pug">
div filter: {{ filter }}
.table-options.flex
    .table-options__item.flex
        img.table-options__item--img(src="/icons/closed-eye.svg" alt="")
        span.table-options__title Спрятать поля
    .table-options__item.flex
        img.table-options__item--img(src="/icons/table.svg" alt="")
        span.table-options__title Табличный вид
        img.table-options__item--img-help(src="/icons/table-bird.svg" alt="")
    DropDown(:blur="false").table-options__item.flex
        template(#trigger)
            img.table-options__item--img(src="/icons/filter.svg" alt="")
            span.table-options__title Фильтры
        .table-options__dropdown-box
            TableFilter(:columns="columns" v-model="filter")
    DropDown.table-options__item.flex
        template(#trigger)
            img.table-options__item--img(src="/icons/group.svg" alt="")
            span.table-options__title Сгруппировать
    DropDown.table-options__item.flex
        template(#trigger)
            img.table-options__item--img(src="/icons/sort.svg" alt="")
            span.table-options__title Сортировка
        .table-options__dropdown-box
            TableSort(:columns="columns" v-model="sort")
div(style="margin-bottom: 50px;")
TableFilter(:columns="columns" v-model="filter")
</template>

<script lang="ts" setup>
import type { TableColumn } from '~/helpers/interfaces'
import DropDown from '~/shared/ui/DropDown.vue'
import TableSort from '~/widgets/table/TableSort.vue'
import TableFilter from '~/widgets/table/TableFilter.vue'

const  columns: TableColumn[] = [{ name: 'Наименование', type: 'string'}, { name: 'Количество', type: 'number'}, { name: 'Дата', type: 'date'}, { name: 'Статус', type: 'status'}, ]
const sort: TableColumn[] = reactive([])
const filter: TableColumn[] = reactive([])
</script>

<style lang="sass" scoped>
.table-options
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