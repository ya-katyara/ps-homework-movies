import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ placeholder, icon, onChange, value, ...props }, ref) {
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
