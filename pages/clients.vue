<template>
    <div class="clients-wrapper">
        <div class="my-table">
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
            <div class="table-content flex">
                <div class="table-content__static">
                    <div class="flex">
                        <div class="table-content__checkbox header">
                            <input type="checkbox">
                        </div>
                        <div class="table-content__column header flex items-center">
                            <span>{{ data.static.name }}</span>
                            <div>
                                <img class="table-content__column-icon" src="/icons/sort.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="flex" v-for="item in data.static.data">
                        <div class="table-content__checkbox list">
                            <input type="checkbox">
                        </div>
                        <div class="table-content__column list flex items-center">
                            <div>
                                <img class="table-content__column-icon-hover" src="/icons/table-hover-column.svg" alt="">
                            </div>
                            <span>{{ item }}</span>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto flex">
                    <div class="table-content__dynamic" v-for="object in data.dynamic">
                        <div class="flex">
                            <div class="table-content__column header flex items-center">
                                <span>{{ object.name }}</span>
                                <div>
                                    <img class="table-content__column-icon" src="/icons/sort.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="flex" v-for="item in object.data">
                            <div class="table-content__column list flex items-center">
                                <div>
                                    <img class="table-content__column-icon-hover" src="/icons/table-hover-column.svg" alt="">
                                </div>
                                <span>{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
   const data = {
        static: {
            name: 'Наименование',
            data: ['1. P-TRD-123', '2. P-TRD-123', '3. P-TRD-123', '4. P-TRD-123', '5. P-TRD-123']
        },
        dynamic: [
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
            {
                name: 'Изделие (я)',
                data: ['Штучно', 'Штучно', 'Штучно', 'Штучно', 'Штучно']
            },
        ],
   }
</script>

<style scoped>
    .clients-wrapper {
        border-radius: 12px 0px 0px 0px;
        background: #F8F8F8;
        box-shadow: 0px 1px 1px 0px rgba(34, 61, 71, 0.20), 0px 2px 2px 0px rgba(34, 61, 71, 0.14), 0px 1px 5px 0px rgba(34, 61, 71, 0.12);
    }
    .my-table {
        padding-top: 26px;
        padding-left: 32px;
        padding-bottom: 26px;
    }
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
    .table-content {
        border-radius: 4px 0px 0px 0px;
        border: 1px solid var(--material-theme-state-layers-light-surface-tint-opacity-016, rgba(103, 80, 164, 0.16));
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.20);
    }
    .table-content__static {
        border-radius: 4px 0px 0px 0px;
        cursor: pointer;
    }
    .table-content__dynamic {
        cursor: pointer;
    }
    .table-content__column, .table-content__checkbox {
        padding: 10px 16px;
    }
    .table-content__column.header, .table-content__checkbox.header {
        background-color: #F3F6FB;
    }
    .table-content__checkbox.list {
        border: 1px solid rgba(121, 116, 126, 0.16);
        border-left: 0;
        border-bottom: 0;
    }
    .table-content__column.list {
        border: 1px solid rgba(121, 116, 126, 0.16);
        border-left: 0;
        width: 100%;
        border-bottom: 0;
    }
    .table-content__column {
        font-size: 14px;
    }
    .table-content__column-icon {
        padding-left: 8px;
        background-color: #F3F6FB;
    }
    .table-content__column-icon-hover {
        padding-right: 10px;
        display: none;
    }
    .table-content__static .flex, .table-content__dynamic .flex {
        min-height: 45px;
        min-width: 150px;
    }
</style>