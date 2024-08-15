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
