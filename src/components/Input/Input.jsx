import './Input.css';

function Input({ placeholder, icon, onChange, value }) {
    return (
        <div className="input_wrapper">
            {icon && <span className='input_icon'>{icon}</span>}
            <input 
                type="text" 
                className="input" 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
            />
        </div>
    );
}

export default Input;
