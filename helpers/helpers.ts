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

