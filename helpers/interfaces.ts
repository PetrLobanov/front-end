type TableColumnType = 'string' | 'number' | 'date' | 'status'

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

export type { TableColumnType, TableColumn, SortColumn, FilterItem }