import LinkButton from '../../components/LinkButton/LinkButton';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="/logo.svg" alt="логотип" />
            <div className="links">
                <LinkButton url="#">Поиск фильмов</LinkButton>
                <LinkButton url="#" icon={<span className='movies_counter'>2</span>}>Мои фильмы</LinkButton>
                <LinkButton url="#" icon={<img src="/img/login.svg" />}>Войти</LinkButton>
            </div>
        </header>
    );
}

export default Header;