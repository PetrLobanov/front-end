<template>
    <span>{{ props.text }}</span>
</template>

<script lang="ts" setup>
    const props = defineProps({
        text: {type: String,  required: true},
    });
</script>