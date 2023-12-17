import { forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ placeholder, icon = undefined, onChange, value, ...props }, ref) {
    return (
        <div className={styles.input_wrapper}>
            {icon && <span className={styles.input_icon}>{icon}</span>}
            <input
                ref={ref}
                type="text"
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    );
});

export default Input;
