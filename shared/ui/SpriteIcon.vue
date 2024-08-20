<template lang="pug">
ClientOnly
    svg-icon(:name="props.name" v-bind="$attrs").svg-icon
</template>

<script lang="ts" setup>
const props = defineProps<{
    name: string,
}>()
</script>

<style lang="sass" scoped>
.svg-icon
    width: 100%
    height: 100%
</style>
