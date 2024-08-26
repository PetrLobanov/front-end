<template>
    <div v-if="props.url" class="flex items-center">
        <img src="/icons/document-pdf.svg" class="pr-2.5" alt="">
        <a :href="props.url" target="_blank">
            {{ props.name }}
        </a>
    </div>
    <div v-else class="flex items-center">
        <img src="/icons/document-load.svg" class="pr-2.5" alt="">
        <span>Прикрепить</span>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        url: {type: String, required: true},
        name: {type: String, required: true}
    });
</script>