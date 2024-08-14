interface TableColumn {
    name: string
    type: 'string' | 'number' | 'date' | 'status',
}

interface SortColumn extends TableColumn {
    direction: 'asc' | 'desc',
}

interface FilterItem extends TableColumn {
    value: string,
}

export type { TableColumn, SortColumn, FilterItem }