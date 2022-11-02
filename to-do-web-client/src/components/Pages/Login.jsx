import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Context/context';
import MyButton from '../UI/Buttons/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const router = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true")
        router('/posts');

    }


    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Логин'></MyInput>
                <MyInput type="password" placeholder='Пароль'></MyInput>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};
export default Login;