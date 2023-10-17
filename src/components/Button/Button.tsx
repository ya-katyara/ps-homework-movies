import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

function Button({onClick, children, className, ...props}: ButtonProps) {
    return (
        <button
            className={cn(styles.button, className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;