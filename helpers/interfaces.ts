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

interface keyPressEvent extends Event {
    keyCode: number
}

export type { TableColumnType, TableColumn, SortColumn, FilterItem, UseFetchOptions, keyPressEvent }