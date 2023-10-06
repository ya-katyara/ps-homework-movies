import Input from '../Input/Input';
import Button from '../Button/Button';
import './Search.css';
import { useState } from 'react';

function Search({onSearch}) {
    const [value, setValue] = useState('');
    
    const onSearchClick = () => {
        onSearch?.(value);
    };

    const onInputChange = (evt) => {
        setValue(evt.target.value);
    };

    return (
        <div className="search">
            <Input
                value={value}
                onChange={onInputChange}
                placeholder="Введите название"
                icon={<img src="/img/search.svg" />}
            />
            <Button onClick={onSearchClick}>Искать</Button>
        </div>
    );
}

export default Search;
