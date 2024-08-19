<template lang="pug">
div(v-for="product in products")
    div {{ product.name }}
button(@click="getProducts") Get products
div
button(@click="addProduct = true") Add product
Modal(v-model="addProduct")
    template(#header)
        div Добавить заявку
    div Modall content
    div(v-for="product in products")
        div {{ product }}

</template>

<script lang="ts" setup>
import Modal from '~/shared/ui/Modal.vue'

const products:Ref<any> = ref(null)

const getProducts = async () => {
    const res: any = await GET('api/v1/product')
    console.warn(res?.data?.value)
    products.value = res?.data?.value?.data || []
}


const addProduct:Ref<boolean> = ref(true)

</script>

<style lang="sass" scoped>
button
    margin-top: 50px

</style>