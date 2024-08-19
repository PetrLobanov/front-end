type TableColumnType = 'string' | 'number' | 'date' | 'status'

type UseFetchOptions<DataT> = {
    key?: string
    method?: string
    query?: SearchParams
    params?: SearchParams
    body?: RequestInit['body'] | Record<string, any>
    headers?: Record<string, string> | [key: string, value: string][] | Headers
    baseURL?: string
    server?: boolean
    lazy?: boolean
    immediate?: boolean
    getCachedData?: (key: string, nuxtApp: NuxtApp) => DataT
    deep?: boolean
    dedupe?: 'cancel' | 'defer'
    default?: () => DataT
    transform?: (input: DataT) => DataT | Promise<DataT>
    pick?: string[]
    watch?: WatchSource[] | false,
    onResponse: any
}

interface TableColumn {
    name: string
    type: TableColumnType
}

interface SortColumn extends TableColumn {
    direction: 'asc' | 'desc',
}

interface FilterItem extends TableColumn {
    value: string,
    operator?: any
}

interface TableType {
    products: Array<Object>,
    name: string,
    batch: string,
    start_date: string,
    planned_finish_date: string,
    production_finish_date: string,
    actual_finish_date: string,
    status: string,
    urgency_status: string,
    note: string,
    first_payment_status: string,
    first_payment_planned_date: string,
    first_payment_actual_date: string,
    // second_payment_status: string,
    // second_payment_planned_date: string,
    // second_payment_actual_date: string,
    // final_payment_status: string,
    // final_payment_planned_date: string,
    // final_payment_actual_date: string,
}

export type { TableColumnType, TableColumn, SortColumn, FilterItem, TableType, UseFetchOptions }