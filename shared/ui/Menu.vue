<template>
    <div class="menu-wrapper">
        <div class="menu-wrapper__logo relative">
            <img src="/logo.png" alt="">
            <div class="menu-wrapper__logo--navigate">
                <img src="/icons/menu-navigate.svg" alt="">
            </div>
        </div>
        <div class="menu-wrapper__item">
            <div class="menu-wrapper__item--nav flex items-center justify-between">
                <div class="flex">
                    <img class="relative left-3" src="/icons/favorites.svg" alt="">
                    <span class="relative left-6">Избранное</span>
                </div>
                <span class="menu-wrapper__item--bird">
                    <img src="/icons/bird.svg" alt="">
                </span>
            </div>
            <ul class="menu-wrapper__list">
                <li :class="{'active' : isActive('/projects').value}">
                    <img src="/icons/projects.svg" alt="">
                    <NuxtLink to="/projects">Проект</NuxtLink>
                </li>
                <li>
                    <img src="/icons/clients.svg" alt="">
                    <a href="">Клиент</a>
                </li>
                <li :class="{'active' : isActive('/products').value}">
                    <img src="/icons/products.svg" alt="">
                    <NuxtLink to="/products">Изделия</NuxtLink>
                </li>
                <li>
                    <img src="/icons/orders-list.svg" alt="">
                    <a href="">Заказ-наряды</a>
                </li>
                <li>
                    <img src="/icons/shops.svg" alt="">
                    <a href="">Цеха</a>
                </li>
                <li>
                    <img src="/icons/cards.svg" alt="">
                    <a href="">Тех карта TRD 1</a>
                </li>
                <li>
                    <img src="/icons/workers.svg" alt="">
                    <a href="">Сотрудники</a>
                </li>
            </ul>
        </div>
        <div class="menu-wrapper__item">
            <div class="menu-wrapper__item--nav flex items-center justify-between">
                <div class="flex">
                    <img class="relative left-3" src="/icons/dashboard-list.svg" alt="">
                    <span class="relative left-6">Дашборды</span>
                </div>
                <span class="menu-wrapper__item--bird">
                    <img src="/icons/bird.svg" alt="">
                </span>
            </div>
            <ul class="menu-wrapper__list">
                <li>
                    <img src="/icons/specification.svg" alt="">
                    <a href="">Спецификация</a>
                </li>
                <li>
                    <img src="/icons/dashboard-list.svg" alt="">
                    <a href="">Списки комплектов и деталей</a>
                </li>
                <li>
                    <img src="/icons/providers.svg" alt="">
                    <a href="">Поставщики</a>
                </li>
                <li>
                    <img src="/icons/warehouses.svg" alt="">
                    <a href="">Склады</a>
                </li>
                <li>
                    <img src="/icons/workers.svg" alt="">
                    <a href="">Сотрудники (роли)</a>
                </li>
                <li>
                    <img src="/icons/cards.svg" alt="">
                    <a href="">Заготовки</a>
                </li>
                <li>
                    <img src="/icons/workers.svg" alt="">
                    <a href="">Бухгалтер</a>
                </li>
            </ul>
        </div>
        <div class="menu-wrapper__settings flex">
            <img class="pl-3" src="/icons/settings.svg" alt="">
            <a class="pl-3" href="">Настройки аккаунта</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();

    const isActive = (path: string) => computed(() => route.path === path);
</script>

<style scoped>
    .menu-wrapper {
        max-width: 316px;
        background: rgb(248, 248, 248);;
    }
    .menu-wrapper__logo {
        padding: 24px 20px;
        padding-bottom: 25px;
        border-bottom: 1px solid rgb(192, 201, 189);
    }
    .menu-wrapper__item {
        padding: 24px 20px;
        border-bottom: 1px solid rgb(192, 201, 189);
    }
    .menu-wrapper__settings {
        padding: 24px 20px;
    }
    .menu-wrapper__item--nav > img, .menu-wrapper__list li img {
        width: 16px;
    }
    .menu-wrapper__list li {
        display: flex;
    }
    .menu-wrapper__list li {
        padding: 16px 12px 16px 12px;
    }
    .menu-wrapper__list li a {
        padding-left: 1rem;
    }
    .menu-wrapper__list .active {
        border-radius: 8px;
        background: rgba(44, 106, 60, 0.14);
    }
    .menu-wrapper__logo--navigate {
        position: absolute;
        top: 38%;
        right: -10px;
        border-radius: 20px;
        background: #94D69D;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    .menu-wrapper__logo--navigate img {
        position: relative;
        top: 5px;
        left: 4px;
    }
</style>