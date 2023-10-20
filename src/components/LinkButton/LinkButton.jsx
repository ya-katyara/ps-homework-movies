import styles from './LinkButton.module.css';

function LinkButton({url, icon = null, onClick, children}) {
    return <a href={url} className={styles.link} onClick={onClick}>
        {children}
        {icon && <span className={styles.link_icon}>{icon}</span>}
    </a>;
}

export default LinkButton;