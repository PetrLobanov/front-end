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