import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useLocalStorage } from '../hooks';

export const UserContext = createContext<IUserContext>({ user: null });

interface IUserContext {
    user: User | null;
    setUser?: (user: User | null) => void;
    handleLogin?: (login: string) => void;
    onLogout?: () => void
}

interface User {
    login: string,
    isLogined: boolean
}

export const UserContextProvider = ({children}:{children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [users, saveUsers] = useLocalStorage<User>('users');

    useEffect(() => {
        const currentUser = users.find((u) => u.isLogined);
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    }, [users, setUser]);

    const handleLogin = useCallback((login: string) => {
        const newUser = { login, isLogined: true };
        if (users.length > 0) {
            const userIdx = users.findIndex((u) => u.login === login);
            if (userIdx < 0) {
                saveUsers([...users, newUser]);
            } else {
                const updatedUsers = [...users];
                updatedUsers[userIdx].isLogined = true;
                saveUsers(updatedUsers);
            }
        } else {
            saveUsers([newUser]);
        }
    }, [users]);

    const onLogout = useCallback(() => {
        saveUsers(
            users.map((u) => ({
                ...u,
                isLogined: false
            }))
        );
    }, [users]);

    return (
        <UserContext.Provider value={{ user, setUser, handleLogin, onLogout }}>
            {children}
        </UserContext.Provider>
    );
};