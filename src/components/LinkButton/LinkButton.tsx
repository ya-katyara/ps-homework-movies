import { LinkButtonProps } from './LinkButton.props';
import cn from 'classnames';
import styles from './LinkButton.module.css';

function LinkButton({icon = undefined, className, children, ...props}: LinkButtonProps) {
    return (
        <a className={cn(styles.link, className)} {...props}>
            {children}
            {icon && <span className={styles.link_icon}>{icon}</span>}
        </a>
    );
}

export default LinkButton;