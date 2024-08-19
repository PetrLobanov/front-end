<template lang="pug">
div(v-for="product in products")
    div {{ product.name }}
button() Add product

</template>

<script lang="ts" setup>
const products:Ref<any> = ref(null)
onBeforeMount( async () => {
    const res: any = await GET('api/v1/product')
    products.value = res?.data?.value?.data || []
})

</script>

<style lang="sass" scoped>
button
    margin-top: 50px

</style>