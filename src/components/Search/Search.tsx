import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';

function Search({onSearch, ...props}: SearchProps) {
    const [value, setValue] = useState('');
    
    const onSearchClick = () => {
        onSearch?.(value);
    };

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    };

    return (
        <div className={styles.search} {...props}>
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
