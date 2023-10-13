import { useContext, useRef, useState } from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';

function Login() {
    const { user, handleLogin } = useContext(UserContext);
    const [login, setLogin] = useState('');
    const inputRef = useRef();

    const onChange = (evt) => {
        const { value } = evt.target;
        setLogin(value);
    };

    const onClick = () => {
        if (!login.length) {
            inputRef.current.focus();
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
            <Heading level={1}>Вход</Heading>
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
