import './LinkButton.css';

function LinkButton({url, icon = null, children}) {
    return <a href={url} className='link'>
        {children}
        {icon && <span className='link_icon'>{icon}</span>}
    </a>;
}

export default LinkButton;