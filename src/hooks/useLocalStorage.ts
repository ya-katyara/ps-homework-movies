import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string): [T[], (newState: T[]) => void] {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        const data = localStorage.getItem(key);
        const parsed = JSON.parse(data ?? '');
        if (parsed?.length) {
            setData(parsed);
        }
    }, [key]);

    const saveState = (newState: T[]) => {
        setData(newState);
        localStorage.setItem(key, JSON.stringify(newState));
    };

    return [data, saveState];
}