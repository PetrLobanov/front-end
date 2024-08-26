<template lang="pug">
button(@click="addProduct = true") Добавить изделие
Modal(v-model="addProduct" icon="icons/add-product" hd="Добавить изделие")
    ProductForm(:data="data")
</template>

<script lang="ts" setup>
import Modal from '~/shared/ui/Modal.vue'
import ProductForm from '~/widgets/ProductForm.vue'
import { productStartData } from '~/helpers/products'

const products:Ref<any> = ref(null)
const getProducts = async () => {
    const res: any = await GET('api/v1/product')
    products.value = res?.data?.value?.data || []
}

const addProduct:Ref<boolean> = ref(false)

const data = reactive(productStartData)

</script>

<style lang="sass" scoped>
button
    margin-top: 50px

</style>
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
    import { getProducts } from '~/shared/api';
    import { columnsProducts, type ProductsInterface } from '~/helpers/columns';

    const request = await getProducts();
    const products: Object = request.data;
    const firstProduct: ProductsInterface = products[0]; 
    const columns: Object = columnsProducts();
</script>

<style>
    @import url('~/assets/table.css'); 
</style>