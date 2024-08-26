<template>
    <component :is="component.component" v-bind="component.props" />
</template>

<script lang="ts" setup>
    import TableDate from '~/shared/ui/table/TableDate.vue';
    import TableDocument from '~/shared/ui/table/TableDocument.vue';
    import TableTag from '~/shared/ui/table/TableTag.vue';
    import TableText from '~/shared/ui/table/TableText.vue';
    import TableType from '~/shared/ui/table/TableType.vue';

    const props = defineProps({
        componentType: {type: String,  required: true},
        value: {type: [String, Object], required: true}
    });

    const getComponents = function() {
        switch (props.componentType) {
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
            case 'type': 
                return {
                    component: TableType,
                    props: {type: props.value},
                } 
            case 'creatorEmployee': 
                return {
                    component: TableTag,
                    props: {tag: props.value},
                }  
            case 'drawings':
                return {
                    component: TableDocument,
                    props: {url: props.value, name: 'Чертеж.pdf'}
                }  
            case 'documentation':
                return {
                    component: TableDocument,
                    props: {url: props.value, name: 'Документ.pdf'}
                }       
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