import './App.css';
import Heading from './components/Heading/Heading';
import Login from './components/Login/Login';
import MoviesList from './components/MoviesList/MoviesList';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import { UserContextProvider } from './context/user.context';
import Header from './layout/Header/Header';

function App() {
    const onSearchBtnClick = (value) => {
        console.log(value);
        console.log('Search button clicked!');
    };

    return (
        <UserContextProvider>
            <Header />
            <Login />
            <div className="page-heading">
                <Heading>Поиск</Heading>
                <Paragraph>
                    Введите название фильма, сериала или мультфильма для поиска
                    и добавления в избранное.
                </Paragraph>
                <Search onSearch={onSearchBtnClick} />
            </div>
            <MoviesList />
        </UserContextProvider>
    );
}

export default App;
