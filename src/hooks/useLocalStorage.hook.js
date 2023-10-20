import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem(key));
        if (data?.length) {
            setData(data);
        }
    }, [key]);

    const saveState = (newState) => {
        setData(newState);
        localStorage.setItem(key, JSON.stringify(newState));
    };

    return [data, saveState];
}