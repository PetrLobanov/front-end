<template>
    <component :is="component.component" v-bind="component.props" />
</template>

<script lang="ts" setup>
    import TableDate from '~/shared/ui/table/TableDate.vue';
    import TableText from '~/shared/ui/table/TableText.vue';

    const props = defineProps({
        type: {type: String,  required: true},
        value: {type: String, required: true}
    });

    const getComponents = function() {
        switch (props.type) {
            case 'start_date':
            case 'planned_finish_date':
            case 'production_finish_date': 
            case 'actual_finish_date':
            case 'first_payment_status':
            case 'first_payment_planned_date':
            case 'first_payment_actual_date':                       
                return {
                    component: TableDate,
                    props: {date: props.value}
                };
            default: 
                return {
                    component: TableText,
                    props: {text: props.value}
                }; 
        }
    }

    const component = getComponents();
</script>

<style></style>