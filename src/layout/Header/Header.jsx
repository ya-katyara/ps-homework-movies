import { useContext } from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import styles from './Header.module.css';
import { UserContext } from '../../context/user.context';

function Header() {
    const { user, onLogout } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <img src="/logo.svg" alt="логотип" />
            </a>
            <div className={styles.links}>
                <LinkButton url="#">Поиск фильмов</LinkButton>
                <LinkButton
                    url="#"
                    icon={<span className={styles.movies_counter}>2</span>}
                >
                    Мои фильмы
                </LinkButton>
                {user && (
                    <>
                        <LinkButton url="#" icon={<img src="/img/user.svg" />}>
                            {user.login}
                        </LinkButton>
                        <LinkButton
                            url="#"
                            icon={<img src="/img/login.svg" />}
                            onClick={onLogout}
                        >
                            Выйти
                        </LinkButton>
                    </>
                )}
                {!user && (
                    <LinkButton url="#" icon={<img src="/img/login.svg" />}>
                        Войти
                    </LinkButton>
                )}
            </div>
        </header>
    );
}

export default Header;