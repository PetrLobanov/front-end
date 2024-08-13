<template>
    <div class="table-filter flex">
        <div class="table-filler__item flex">
            <img class="table-filler__item--img" src="/icons/closed-eye.svg" alt="">
            <span>Спрятать поля</span>
        </div>
        <div class="table-filler__item flex">
            <img class="table-filler__item--img" src="/icons/table.svg" alt="">
            <span>табличный вид</span>
            <img class="table-filler__item--img-help" src="/icons/table-bird.svg" alt="">
        </div>
        <div class="table-filler__item flex">
            <img class="table-filler__item--img" src="/icons/filter.svg" alt="">
            <span>фильтры</span>
        </div>
        <div class="table-filler__item flex">
            <img class="table-filler__item--img" src="/icons/group.svg" alt="">
            <span>сгруппировать</span>
        </div>
        <div class="table-filler__item flex">
            <img class="table-filler__item--img" src="/icons/sort.svg" alt="">
            <span>Сортировка</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
    .table-filter {
        padding-bottom: 26px;
    }
    .table-filler__item {
        padding-left: 16px;
        padding-right: 16px;
        cursor: pointer;
    }
    .table-filler__item span {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 14px;
    }
    .table-filler__item  .table-filler__item--img {
        padding-right: 8px;
    }
    .table-filler__item--img-help {
        padding-left: 8px;
    }
</style>