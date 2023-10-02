import './App.css';
import Heading from './components/Heading/Heading';
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
            <Heading level="1">Поиск</Heading>
            <Paragraph>
                Введите название фильма, сериала или мультфильма для поиска и
                добавления в избранное.
            </Paragraph>
            <Search onSearch={onSearchBtnClick} />
            <Paragraph size="large">
                After the devastating events of Avengers: Infinity War, the
                universe is in ruins due to the efforts of the Mad Titan,
                Thanos. With the help of remaining allies, the Avengers must
                assemble once more in order to undo Thanos&lsquo; actions and
                restore order to the universe once and for all, no matter what
                consequences may be in store.
            </Paragraph>
        </>
    );
}

export default App;
