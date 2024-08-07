<template>
    <div>
        <div class="mb-2">
            <label for="" class="color-27-23-22 text-xs">{{ props.label }}</label>
        </div>
        <div class="relative">
            <img :src="`/_nuxt/assets/icons/${props.icon}`" alt="">
            <input type="text" id="" :placeholder="props.placeholder" class="w-full">
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    const props = defineProps({
        label: { type: String, required: true },
        placeholder: { type: String, required: true},
        icon: { type: String }
    });
</script>

<style scoped>
    img {
        position: absolute;
        left: 12px;
        top: 6px;
    }
    input {
        padding: 14px 0 14px 46px;
        font-size: 16px;
        font-weight: 400;
        border-radius: 4px 4px 0px 0px;
        background: rgb(255, 255, 255);
    }
</style>