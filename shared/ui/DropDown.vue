<template lang="pug">
.dropdown(ref="dropdown" @focus="show = true" @blur="onBlur" tabindex="-1" :class="{'--open': show}")
    .dropdown__trigger(role="button" @click="open()")
        slot(name="trigger")
    .dropdown__box(:class="{'--show': show}")
        slot
</template>

<script lang="ts" setup>
export interface Props {
    blur?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    blur: true,
})
const show = ref(false)
const dropdown:any = ref(null)

const close = () => {
    dropdown.value.blur()
}
const open = () => {
    dropdown.value.focus()
}
const getEl = () => {
    return dropdown.value
}
defineExpose({ close, open, getEl, show })
const onBlur = () => {
    if(props.blur) {
        show.value = false
    }
}

if(!props.blur) {
    const onClick = (Event) => {
        const el = getEl()
        if (!(el == Event.target || el.contains(Event.target))) {
            show.value = false
        }
    }
    onMounted(() => {
        document.body.addEventListener('click', onClick)
    })
    onUnmounted(() => {
        document.body.removeEventListener('click', onClick)
    })

}
</script>

<style lang="sass" scoped>
.dropdown
    position: relative
    &__trigger
        line-height: 0
    &__box
        position: absolute
        left: 0
        top: calc(100% + 10px)
        background: #F8F8F8
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2), 0px 9px 10px rgba(0, 0, 0, 0.14), 0px 5px 14px rgba(0, 0, 0, 0.12)
        border-radius: 12px
        display: none
        &.--show
            display: block
            z-index: 2
</style>

