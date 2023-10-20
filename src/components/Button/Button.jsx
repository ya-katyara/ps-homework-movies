import cn from 'classnames';
import styles from './Button.module.css';

function Button({onClick, children, className}) {
    return <button className={cn(styles.button, className)} onClick={onClick}>{children}</button>;
}

export default Button;