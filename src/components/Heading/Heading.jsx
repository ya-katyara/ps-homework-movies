import './Heading.css';

function Heading({level, children}) {
    switch (level) {
        case '1':
            return <h1 className='h1'>{children}</h1>;
        case '2':
            return <h2 className='h2'>{children}</h2>;
        case '3':
            return <h3 className='h3'>{children}</h3>;
        default:
            return <></>;
    }
}

export default Heading;