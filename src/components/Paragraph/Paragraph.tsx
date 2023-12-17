import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

function Paragraph({size = 'regular', children, ...props}: ParagraphProps) {
    return (
        <p className={cn(styles.paragraph, styles[size])} {...props}>
            {children}
        </p>
    );
}

export default Paragraph;