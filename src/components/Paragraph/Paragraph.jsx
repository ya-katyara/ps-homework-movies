import './Paragraph.css';

function Paragraph({size = 'regular', children}) {
    return <p className={`paragraph ${size}`}>{children}</p>;
}

export default Paragraph;