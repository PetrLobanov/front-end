<template lang="pug">
button(@click="addProduct = true") Добавить изделие
Modal(v-model="addProduct" icon="icons/add-product" hd="Добавить изделие")
    ProductForm(:data="data")
div data:
div {{  data }}
</template>

<script lang="ts" setup>
import Modal from '~/shared/ui/Modal.vue'
import ProductForm from '~/widgets/ProductForm.vue'
import { productStartData } from '~/helpers/helpers'

const products:Ref<any> = ref(null)
const getProducts = async () => {
    const res: any = await GET('api/v1/product')
    products.value = res?.data?.value?.data || []
}

const addProduct:Ref<boolean> = ref(true)

const data = reactive(productStartData)

</script>

<style lang="sass" scoped>
button
    margin-top: 50px

</style>