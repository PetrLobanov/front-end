<template lang="pug">
.table-filter.flex
  .table-filler__item.flex
    img.table-filler__item--img(src="/icons/closed-eye.svg" alt="")
    span Спрятать поля
  .table-filler__item.flex
    img.table-filler__item--img(src="/icons/table.svg" alt="")
    span Табличный вид
    img.table-filler__item--img-help(src="/icons/table-bird.svg" alt="")
  .table-filler__item.flex
    img.table-filler__item--img(src="/icons/filter.svg" alt="")
    span Фильтры
  .table-filler__item.flex
    img.table-filler__item--img(src="/icons/group.svg" alt="")
    span Сгруппировать
  .table-filler__item.flex
    img.table-filler__item--img(src="/icons/sort.svg" alt="")
    span Сортировка
</template>

<script lang="ts" setup>
</script>

<style lang="sass" scoped>
.table-filter
  padding-bottom: 26px
  &__item
    padding-left: 16px
    padding-right: 16px
    cursor: pointer
  &__item span
    font-weight: 500
    text-transform: uppercase
    font-size: 14px
  &__item--img
    padding-right: 8px
  &__item--img-help
    padding-left: 8px
</style>