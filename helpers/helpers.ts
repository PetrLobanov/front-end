export const textСapitalize = (text="") => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const isInt = (n:any) => {
    return Number(n) === n && n % 1 === 0
}

export const isFloat = (n:any) => {
    return Number(n) === n && n % 1 !== 0
}

export const isIntOrFloat = (n: any) => {
    return isInt(n) || isFloat(n)
}

export const isString = (n: any) => {
    return typeof n === 'string' || n instanceof String
}

export const operatorsOptions = {
    string: [
        { value: 'contains', label: 'Содержит' },
        { value: 'not-contain', label: 'Не содержит' },
        { value: 'exact-match', label: 'Точное вхождение' },
        { value: 'empty', label: 'Пустое' },
        { value: 'not-empty', label: 'Не пустое' },
    ],
    number: [
        { value: 'more', label: '>' },
        { value: 'less', label: '<' },
        { value: 'equals', label: '=' },
        { value: 'not-equal', label: '≠' },
        { value: 'empty', label: 'Пустое' },
        { value: 'not-empty', label: 'Не пустое' },
    ],
    date: [
        { value: 'has-date', label: 'Есть дата' },
        { value: 'not-date', label: 'Нет даты' },
        { value: 'start-end', label: 'Период начало-конец' },
    ],
    status: [
        { value: 'has-status', label: 'Содержит Статус' },
        { value: 'not-status', label: 'Не содержит Статус' },
        { value: 'empty', label: 'Пустое' },
    ],
}

export const assortmentStatuses = ['Assortment','Order','Archive','Discontinued']

export const productStartData = {
    'name': 'sdada',
    'type': '',
    'batch_number': '',
    'responsible_employee_id': '1',
    'assortment_status': '',
    'equipment_leather': 'TwoTwoTree',
    'equipment_stitch': 'TRD',
    'equipment_rails': 'Transition',
    'equipment_armrest': 'Beige',
    'drawings': '/storage//tmp/fakerVfhjXg',
    'documentation': '/storage//tmp/fakerXdeGVb',
    'special_instructions': 'Et molestiae architecto accusantium nemo. Quam incidunt necessitatibus qui sapiente nisi qui consectetur. Ab aut magnam nisi.',
    'creatorEmployee': {
        'id': 12,
        'name': 'Genoveva Ernser',
        'created_at': '2024-08-15T16:55:59.000000Z',
        'updated_at': '2024-08-15T16:55:59.000000Z'
    },
    'technologicalMap': {
        'id': 11,
        'name': 'Addie Hagenes',
        'created_at': '2024-08-15T16:55:59.000000Z',
        'updated_at': '2024-08-15T16:55:59.000000Z'
    }
}
