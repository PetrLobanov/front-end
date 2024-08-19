<template lang="pug">
ClientOnly
    svg-icon(:name="props.name" v-bind="$attrs")
</template>

<script lang="ts" setup>
const props = defineProps<{
    name: string,
}>()
</script>

<style lang="sass" scoped>
</style>
