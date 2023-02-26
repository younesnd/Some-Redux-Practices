import { useImmer } from 'use-immer';
import { useMemo } from 'react'
import { IDLE, defaultApiStatuses, ApiStatus } from '@/constants/apiStatus'

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const prepareStatuses = (currentStatus: ApiStatus): Statuses => {
    const statuses = {} as Statuses
    for (const status of defaultApiStatuses) {
        const normalisedStatus = capitalize(status.toLowerCase())
        const normalisedStatusKey = `is${normalisedStatus}` as keyof Statuses
        statuses[normalisedStatusKey] = status === currentStatus
    }
    return statuses
}

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
    const [status, setStatus] = useImmer<ApiStatus>(currentStatus)
    const statuses = useMemo(() => prepareStatuses(status), [status])
    return {
        status,
        setStatus,
        ...statuses,
    }
}