<template>
    <div class="wrapper">
        <div>
            <img class="logo" src="/logo-white.png" alt="">
        </div>
        <div class="form">
            <LoginForm></LoginForm>
        </div>
        <div class="flex justify-between wrapper__bottom">
            <a class="text-white underline" href="">Политика конфидециальности</a>
            <div class="text-white">©️ Все права защищены</div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    import LoginForm from '~/widgets/LoginForm.vue';
    definePageMeta({
        layout: 'start'
    })
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .form {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 45px;
    }
    .logo {
        padding: 36px 0 0 0;
        margin: auto;
        display: block;
    }
    .wrapper__bottom {
        padding: 12px 48px;
        width: 100%;
    }
</style>