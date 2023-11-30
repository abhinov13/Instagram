import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authenticate from "../../../../Domain/UseCase/User/Authenticate";

export const LoginViewModel = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const attemptLogin = (e) => {
        e.preventDefault();
        Authenticate()
        .execute({username, password})
        .then(({data}) => {
            if(data)
            {
                navigate('/home', { state: { username: username} });
            }
            else{
                alert('Wrong Username or Password');
            }
        });
        
    }



    return {
        setUsername,
        setPassword,
        attemptLogin
    }
}