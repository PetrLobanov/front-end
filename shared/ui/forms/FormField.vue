<template lang="pug">
.form-field
    slot
    .form-field__error(v-for="error in errors") {{ error }}
</template>

<script lang="ts" setup>
import { isArray } from '~/helpers/helpers'

const props: any = defineProps<{
    error?: string | [string],
}>()

const errors = computed(() => {
    return isArray(props.error) ? props.error : [props.error]
})


</script>

<style lang="sass" scoped>
.form-field
    display: flex
    flex-direction: column
    gap: 5px
    &__error
        font-size: 14px
        color: var(--red-500-color)

</style>