<template>
    <div class="flex flex-row flex-wrap mx-auto">
        <div class="md:w1/4 lg:w1/6 mr-8">
            <Menu></Menu>
        </div>
        <div class="flex-1 min-w-[300px]">
            <div class="mb-8">
                <ToolBar></ToolBar>
            </div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Menu from '~/shared/ui/Menu.vue'
    import ToolBar from '~/shared/ui/ToolBar.vue';
</script>

<style scoped>

</style>
  