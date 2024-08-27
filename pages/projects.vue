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
                        <tr v-for="product in products">
                            <td class="table-content__checkbox list">
                                <input type="checkbox">
                            </td>
                            <td class="table-content__column list">
                                <span>{{ product.name }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="overflow-x-auto">
                    <table class="table-content__dynamic--header">
                        <thead>
                            <tr>
                                <th v-for="item, key in firstProduct" v-show="columns[key] !== undefined" class="table-content__column header text-left">
                                    <div class="flex">
                                        <span>
                                            {{ columns[key] }}
                                        </span>
                                        <img class="table-content__column--sort" src="/icons/sort.svg" alt="">
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" class="table-content__dynamic--values">
                                <td v-for="item, key in product" v-show="columns[key] !== undefined" class="table-content__column list">
                                    <TableValueComponents :componentType="key" :value="product[key]" />
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
    import TableValueComponents from '~/widgets/table/TableValueComponents.vue';
    import { getProjects } from '~/shared/api';
    import { columnProjects, type ProjectsInterface } from '~/helpers/columns';

    const request = await getProjects();
    const products: Object = request.data;
    const firstProduct: ProjectsInterface = products ? products[0] : [];
    const columns: Object = columnProjects();
</script>

<style scoped>
    @import url('~/assets/table.css');
</style>