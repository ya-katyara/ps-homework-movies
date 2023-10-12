import { useEffect, useState } from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import Login from './components/Login/Login';
import MoviesList from './components/MoviesList/MoviesList';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import Header from './layout/Header/Header';
import { useLocalStorage } from './hooks/useLocalStorage.hook';

function App() {
    const [user, setUser] = useState(null);
    const [users, saveUsers] = useLocalStorage('users');

    useEffect(() => {
        const currentUser = users.find(u => u.isLogined);
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    }, [users]);

    const handleLogin = (login) => {
        const newUser = { login, isLogined: true };
        if (users.length > 0) {
            const userIdx = users.findIndex(u => u.login === login);
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
        saveUsers(users.map((u) => ({
                ...u,
                isLogined: false
            }))
        );
    };

    const onSearchBtnClick = (value) => {
        console.log(value);
        console.log('Search button clicked!');
    };

    return (
        <>
            <Header user={user} onLogout={onLogout} />
            {!user && <Login onLogin={handleLogin} />}
            <div className="page-heading">
                <Heading>Поиск</Heading>
                <Paragraph>
                    Введите название фильма, сериала или мультфильма для поиска
                    и добавления в избранное.
                </Paragraph>
                <Search onSearch={onSearchBtnClick} />
            </div>
            <MoviesList />
        </>
    );
}

export default App;
