interface TableColumn {
    name: string
    type: 'string' | 'number' | 'date' | 'status',
}

interface SortColumn extends TableColumn {
    direction: 'asc' | 'desc',
}

export type { TableColumn, SortColumn }