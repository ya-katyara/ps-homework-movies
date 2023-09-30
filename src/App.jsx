import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
    return (
        <>
            <Heading level="1">Поиск</Heading>
            <Button>Искать</Button>
            <Paragraph>
                Введите название фильма, сериала или мультфильма для поиска и
                добавления в избранное.
            </Paragraph>
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
