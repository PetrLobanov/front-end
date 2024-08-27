<template>
    <form action="">
        <div class="text-3xl text-center mb-6 color-27-23-22">Добро пожаловать</div>
        <div class="text-xs text-center mb-5 color-64-73-64">Введите свои данные, чтобы продолжить</div>
        <div class="mb-5">
            <FormInput
                v-model="data.email"
                label="Е-майл"
                placeholder="Ваш емайл"
                icon="email.svg">
            </FormInput>
        </div>
        <div class="mb-7">
            <FormInput
                v-model="data.password"
                label="Пароль"
                placeholder="Введите ваш пароль"
                icon="password.svg">
            </FormInput>
        </div>
        <div class="flex items-center mb-9">
            <div class="mx-3.5">
                <CheckBox></CheckBox>
            </div>
            <div class="text-sm color-27-23-22">Я согласен с положениями и условиями</div>
        </div>
        <div>
            <FormButton @click="submit()"></FormButton>
            <div>data: {{ data }}</div>
        </div>
    </form>
</template>

<script lang="ts" setup>
import FormInput from '~/shared/ui/FormInput.vue'
import CheckBox from '~/shared/ui/CheckBox.vue'
import FormButton from '~/shared/ui/FormButton.vue'

const data: any = reactive({email: '', password: ''})

const validate = () => {
    return data.email && data.password
}

const submit = () => {
    console.warn(data)
    if (!validate) return
}
</script>

<style lang="sass" scoped>
form
    padding: 64px
    border-radius: 20px
    border-radius: 20px
    box-shadow: 0px 5px 14px 0px rgba(34, 61, 71, 0.12),0px 9px 10px 0px rgba(34, 61, 71, 0.14),0px 5px 5px 0px rgba(34, 61, 71, 0.2)
    background: rgb(243, 246, 251)
    min-width: 548px
</style>