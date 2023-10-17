import { ChangeEvent, useRef, useState } from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import { useAuth } from '../../hooks/useAuth.hook';

function Login() {
    const { user, handleLogin } = useAuth();
    const [login, setLogin] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setLogin(value);
    };

    const onClick = () => {
        if (!login.length) {
            inputRef.current?.focus();
            return;
        }
        setLogin('');
        handleLogin?.(login);
    };

    if (user) {
        return <></>;
    }

    return (
        <div>
            <Heading level='1'>Вход</Heading>
            <Input
                type="text"
                name="login"
                value={login}
                onChange={onChange}
                placeholder="Ваше имя"
                ref={inputRef}
            />
            <Button onClick={onClick}>Войти в профиль</Button>
        </div>
    );
}

export default Login;
