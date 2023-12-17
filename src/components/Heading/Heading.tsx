import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';

function Heading({level, children, ...props}: HeadingProps) {
    switch (level) {
        case '3':
            return (
                <h3 className={styles.h3} {...props}>
                    {children}
                </h3>
            );
        case '2':
            return (
                <h2 className={styles.h2} {...props}>
                    {children}
                </h2>
            );
        case '1':
        default:
            return (
                <h1 className={styles.h1} {...props}>
                    {children}
                </h1>
            );
    }
}

export default Heading;