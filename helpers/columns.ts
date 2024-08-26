interface ProductsInterface {
    id: number,
    name: String,
    type: {
        id: number,
        name: String,
    }
    batch_number: String,
    responsibleEmployee: {
        id: number,
        name: String,
        created_at: String,
        updated_at: String,
    }
    assortment_status: String,
    equipment_leather: String,
    equipment_stitch: String,
    equipment_rails: String,
    equipment_armrest: String,
    drawings: String,
    documentation: String,
    special_instructions: String,
    creatorEmployee: {
        id: number,
        name: String,
        created_at: String,
        updated_at: String,
    },
    technologicalMap: {
        id: number,
        name: String,
        created_at: String,
        updated_at: String,
    }
}

interface ProjectsInterface {
    id: number,
    created_at: number,
    updated_at: number,
    project_products: [
        {
            id: number,
            product_id: number,
            properties: Array<Object>
        }
    ],
    name: string,
    bath: string,
    start_date: number,
    planned_finish_date: number,
    production_finish_date: number,
    actual_finish_date: number,
    status: {
        id: number,
        value: string,
    },
    urgency_status: {
        id: number,
        name: string,
    },
    note: string, 
    first_payment_status: {
        id: number,
        name: string,
    },
    first_payment_planned_date: number,
    first_payment_actual_date: number,
    second_payment_status: {
        id: number,
        name: string,
    },
    second_payment_planned_date: number,
    second_payment_actual_date: number,
    final_payment_status: {
        id: number,
        name: string,
    }
    final_payment_planned_date: number,
    final_payment_actual_date: number,
    tech_task: string,
}

export const columnsProducts = (): Object => {
    return {
        type: 'Тип изделия',
        batch_number: 'Номер партии', 
        responsibleEmployee: 'Ответственный',
        assortment_status: 'Статус ассортиментный',
        equipment_leather: 'Параметры комплектации изделия',
        drawings: 'Чертежи',
        documentation: 'Документация',
        special_instructions: 'Особые указания',
        creatorEmployee: 'Создатель конструктов',
        technologicalMap: 'Тех карта',
    }
}

export const columnProjects = (): Object => {
    return {
        project_products: 'Изделия',
    }
}

export type {ProductsInterface, ProjectsInterface}

