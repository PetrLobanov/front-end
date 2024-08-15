<template>
    <div class="flex" @click="toggleClass">
        <img src="/icons/v-date-picker.svg" alt="">
        <span>{{ props.date }}</span>
    </div>
    <div class="calendar">
        <client-only>
            <VCalendar v-model="date" :attributes="attrs" />
        </client-only>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from '#imports'
    const props = defineProps({
        date: {type: String,  required: true},
    });

    const date = ref(new Date())

    const attrs = ref([
        {
            key: 'today',
            highlight: {
                color: 'black',
                fillMode: 'solid'
            },
            dates: props.date,
        }   
    ]);

    //

    const toggleClass = function(event: MouseEvent) {
        const element = event.currentTarget;

        element.nextElementSibling.classList.toggle('active')
    }

</script>

<style scoped>
    img {
        width: 24px;
    }
    span {
        padding-left: 24px;
    }
    .calendar {
        position: absolute;
        display: none;
    }
    .calendar.active {
        display: block;
    }
</style>