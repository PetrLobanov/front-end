<template>
    <div class="clients-wrapper">
        <div class="my-table">
            <TableManagement />
            <div class="table-content flex">
                <table class="table-content__static">
                    <thead>
                        <tr>
                            <th class="table-content__checkbox header">
                                <input type="checkbox">
                            </th>
                            <th class="table-content__column header flex text-left">
                                <span>Наименование</span>
                                <img class="table-content__column--sort" src="/icons/sort.svg" alt="">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data">
                            <td class="table-content__checkbox list">
                                <input type="checkbox">
                            </td>
                            <td class="table-content__column list">
                                <span>name</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="overflow-x-auto">
                    <table class="table-content__dynamic--header">
                        <thead>
                            <tr>
                                <th v-for="item, key in data[0]" :key="key" 
                                    class="table-content__column header text-left">
                                    <div class="flex">
                                        <span>
                                            <TableType :type="key"></TableType>
                                        </span>
                                        <img class="table-content__column--sort" src="/icons/sort.svg" alt="">
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="items in data" class="table-content__dynamic--values">
                                <td v-for="item, key in items" :key="key" class="table-content__column list">
                                    <TableValueComponents :type="key" :value="items[key]" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import TableManagement from '~/widgets/table/TableManagement.vue';
    import TableType from '~/widgets/table/TableType.vue';
    import TableValueComponents from '~/widgets/table/TableValueComponents.vue';

   const data = [
        {
            // "id": "f201c5b3-d78e-5298-b858-9ae447b97bd0",
            // "created_at": 1723121828,
            // "updated_at": 1723121828,
            //"name": "P-TRD-123",
            "batch": "Партия 1",
            "start_date": "2024-12-31",
            "planned_finish_date": "2024-12-31",
            "production_finish_date": "2024-12-31",
            "actual_finish_date": "2024-12-31",
            "status": "on_agreement",
            "urgency_status": "not_urgently",
            "note": "Очень крутой проект",
            "first_payment_status": "pending",
            "first_payment_planned_date": "2024-12-31",
            "first_payment_actual_date": "2024-12-31",
            // "second_payment_status": "pending",
            // "second_payment_planned_date": "2024-12-31",
            // "second_payment_actual_date": "2024-12-31",
            // "final_payment_status": "pending",
            // "final_payment_planned_date": "2024-12-31",
            // "final_payment_actual_date": "2024-12-31",
        },

        {
            // "id": "f201c5b3-d78e-5298-b858-9ae447b97bd1",
            // "created_at": 1723121828,
            // "updated_at": 1723121828,
            //"name": "P-TRD-1231",
            "batch": "Партия 1",
            "start_date": "2024-12-31",
            "planned_finish_date": "2024-12-31",
            "production_finish_date": "2024-12-31",
            "actual_finish_date": "2024-12-31",
            "status": "on_agreement",
            "urgency_status": "not_urgently",
            "note": "Очень крутой проект",
            "first_payment_status": "pending",
            "first_payment_planned_date": "2024-12-31",
            "first_payment_actual_date": "2024-12-31",
            // "second_payment_status": "pending",
            // "second_payment_planned_date": "2024-12-31",
            // "second_payment_actual_date": "2024-12-31",
            // "final_payment_status": "pending",
            // "final_payment_planned_date": "2024-12-31",
            // "final_payment_actual_date": "2024-12-31",
        },
    ]
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
    .table-content {
        border-radius: 4px 0px 0px 0px;
        border: 1px solid var(--material-theme-state-layers-light-surface-tint-opacity-016, rgba(103, 80, 164, 0.16));
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.20);
    }
    .table-content__static {
        border-radius: 4px 0px 0px 0px;
        cursor: pointer;
    }
    .table-content__dynamic--header {
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
        min-width: 200px;
    }
    .table-content__column-icon {
        padding-left: 8px;
        background-color: #F3F6FB;
    }
    .table-content__column-icon-hover {
        padding-right: 10px;
        display: none;
    }
    .table-content__column.header span,
    .table-content__column.list span {
        white-space: nowrap;
    }
    .table-content__dynamic--header {
        border-left: 1.5px solid #000;
    }
    table thead, .table-content__column {
        height: 45px;
    }
    .table-content__static .table-content__column {
        border-right: 0;
    }
    input[type="checkbox"]:checked {
        accent-color: #1B1716;
    }
    .table-content__column--sort {
        padding-left: 8px;
        width: 18px;
    }
</style>