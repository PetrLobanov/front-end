<template>
    <div class="wrapper">
        <div>
            <img class="logo" src="../assets/logo-white.png" alt="">
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
    import LoginForm from '~/widgets/LoginForm.vue'
</script>

<style scoped>
    .wrapper {
        background-image: url('~/assets/login-bg.png');
        background-size: cover;
        background-attachment: fixed;
        height: 100%;
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
    }
    .logo {
        padding: 36px 0 0 0;
        margin: auto;
        display: block;
    }
    .wrapper__bottom {
        padding: 48px 48px;
    }
</style>