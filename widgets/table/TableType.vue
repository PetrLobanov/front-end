<template>
    <span> {{ value }} </span>
</template>

<script lang="ts" setup>
    import type { TableType } from '~/helpers/interfaces'
    const props = defineProps({
        type: {type: String,  required: true},
    });

    const names: TableType = {
        products: [],
        name: '',
        batch: 'Партия',
        start_date: 'Дата начала проекта',
        planned_finish_date: 'Дата завершения (плановая)',
        production_finish_date: 'Дата завершения (производственная)',
        actual_finish_date: 'Дата завершения (факстическая)',
        status: 'Статус производства',
        urgency_status: 'Срочность',
        note: 'Примечание',
        first_payment_status: 'Статус оплаты первого платежа',
        first_payment_planned_date: 'Плановая дата 1го пл.',
        first_payment_actual_date: 'Фактическая дата 1го пл.',
    }

    let value = '';

    if(props.type === 'products') {
        value = 'Изделие (я)';
    } else {
        value = names[props.type];
    }
</script>

<style></style>