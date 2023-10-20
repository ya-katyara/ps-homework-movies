import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Search.module.css';

function Search({onSearch}) {
    const [value, setValue] = useState('');
    
    const onSearchClick = () => {
        onSearch?.(value);
    };

    const onInputChange = (evt) => {
        setValue(evt.target.value);
    };

    return (
        <div className={styles.search}>
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
