const localeName = 'ru-RU'
const showNotADateAs = '—'

export const formatDate = (date: string) => {
    if (date === null) {
        return showNotADateAs
    }
    try {
        const d = new Date(date)
        return d.toLocaleDateString(localeName)
    } catch {
        return showNotADateAs
    }
}

export const formatDateTime = (date: string, separator = ' ') => {
    if (date === null) {
        return showNotADateAs
    }

    try {
        const d = new Date(date)
        return d.toLocaleDateString(localeName) + separator + d.toLocaleTimeString(localeName)
    } catch {
        return showNotADateAs
    }
}

export const formatSex = (gender: string) => {
    switch (gender) {
        case 'Ж':
            return 'Женский'
        case 'М':
            return 'Мужской'
        default:
            return null
    }
}
