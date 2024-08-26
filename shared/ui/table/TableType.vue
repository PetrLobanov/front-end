<template>
    <span class="type">{{ props.type.name }}</span>
</template>

<script lang="ts" setup>
    const props = defineProps({
        type: {type: Object,  required: true},
    });
</script>

<style scoped>
    .type {
        padding: 6px 8px;
        align-items: center;
        gap: 6px;
        border-radius: 4px;
        background: #C1C2C3;
        line-height: 20px; /* 200% */
        font-size: 10px;
        color: #1B1716;
    }
</style>