import './App.css';
import Heading from './components/Heading/Heading';
import MoviesList from './components/MoviesList/MoviesList';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import Header from './layout/Header/Header';

function App() {
    const onSearchBtnClick = (value) => {
        console.log(value);
        console.log('Search button clicked!');
    };

    return (
        <>
            <Header />
            <div className='page-heading'>
                <Heading level="1">Поиск</Heading>
                <Paragraph>
                    Введите название фильма, сериала или мультфильма для поиска и
                    добавления в избранное.
                </Paragraph>
                <Search onSearch={onSearchBtnClick} />
            </div>
            <MoviesList />
        </>
    );
}

export default App;
