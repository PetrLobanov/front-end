<template lang="pug">
.table-sort-direction(@click="changeDirection")
    template(v-if="dir === 'asc'") {{ firstWord }} → {{ secondtWord }}
    template(v-else) {{ secondtWord }} → {{ firstWord }}
</template>

<script lang="ts" setup>
import type { SortColumn } from '~/helpers/interfaces'

const props = defineProps<{
    column: SortColumn,
}>()

const col = props.column
const dir = computed(() => {
    return col.direction
})

const firstWord = computed(() => {
    let res = col.type === 'number' ? '0' : 'А'
    if (col.type === 'date') {
        res = 'Раньше'
    } else if (col.type === 'status') {
        res = 'Первый'
    }
    return res
})

const secondtWord = computed(() => {
    let res = col.type === 'number' ? '9' : 'Я'
    if (col.type === 'date') {
        res = 'Позжее'
    } else if (col.type === 'status') {
        res = 'Последний'
    }
    return res
})

const changeDirection = () => {
    props.column.direction = props.column.direction === 'asc' ? 'desc' : 'asc'
}
</script>

<style lang="sass" scoped>
.table-sort-direction
    cursor: pointer
    padding: 0 5px
    color: #36515B
    font-size: 13px
    &:hover
        color: #000
        background-color: #2C6A3C24
</style>
