import styles from './Input.module.css';

function Input({ placeholder, icon, onChange, value, ...props }) {
    return (
        <div className={styles.input_wrapper}>
            {icon && <span className={styles.input_icon}>{icon}</span>}
            <input
                type="text"
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    );
}

export default Input;
