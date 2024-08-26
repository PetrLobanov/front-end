<template>
    <span class="tag">{{ props.tag.name }}</span>
</template>

<script lang="ts" setup>
    const props = defineProps({
        tag: {type: Object,  required: true},
    });
</script>
<style scoped>
    .tag {
        font-size: 10px;
        line-height: 20px;
        border-radius: 4px;
        background: #3183FE;
        padding: 4px 12px;
        color: #fff;
    }
</style>