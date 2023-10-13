import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';

export const UserContext = createContext({user: null});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [users, saveUsers] = useLocalStorage('users');

    useEffect(() => {
        const currentUser = users.find((u) => u.isLogined);
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    }, [users, setUser]);

    const handleLogin = (login) => {
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
    };

    const onLogout = () => {
        saveUsers(
            users.map((u) => ({
                ...u,
                isLogined: false
            }))
        );
    };

    return (
        <UserContext.Provider value={{ user, setUser, handleLogin, onLogout }}>
            {children}
        </UserContext.Provider>
    );
};