import cn from 'classnames';
import styles from './Paragraph.module.css';

function Paragraph({size = 'regular', children}) {
    return <p className={cn(styles.paragraph, styles[size])}>{children}</p>;
}

export default Paragraph;