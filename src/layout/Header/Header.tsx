import LinkButton from '../../components/LinkButton/LinkButton';
import styles from './Header.module.css';
import { useAuth } from '../../hooks';

function Header() {
    const { user, onLogout } = useAuth();

    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <img src="/logo.svg" alt="логотип" />
            </a>
            <div className={styles.links}>
                <LinkButton href="#">Поиск фильмов</LinkButton>
                <LinkButton
                    href="#"
                    icon={<span className={styles.movies_counter}>2</span>}
                >
                    Мои фильмы
                </LinkButton>
                {user && (
                    <>
                        <LinkButton href="#" icon={<img src="/img/user.svg" />}>
                            {user.login}
                        </LinkButton>
                        <LinkButton
                            href="#"
                            icon={<img src="/img/login.svg" />}
                            onClick={onLogout}
                        >
                            Выйти
                        </LinkButton>
                    </>
                )}
                {!user && (
                    <LinkButton href="#" icon={<img src="/img/login.svg" />}>
                        Войти
                    </LinkButton>
                )}
            </div>
        </header>
    );
}

export default Header;