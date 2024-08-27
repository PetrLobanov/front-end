<template>
    <button type="button">Вход</button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    button {
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        color: #fff;
        padding: 18px;
        border-radius: 4px;
        background: rgb(30, 93, 48);
        position: relative;
    }

button::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  border: solid #fff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: translateY(-50%) rotate(-45deg);
}
</style>