import axios from 'axios';
import { useState } from 'react';
import { Login } from './Login';
import { useNavigate } from 'react-router-dom';

export function Home(props: any) {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event: any) => {
        setemail(event.target.value);
    };

    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const onSubmit = () => {
        if (password === '' || email === '') {
            return console.log('Empty fields');
        }
        axios.post('api/session/', { email: email, password: password }, { withCredentials: true }).then((response) => {
            if (response.data.email === email) {
                if (response.data.admin) {
                    navigate('/admin');
                } else {
                    navigate('/dashboard');
                }
            } else {
                console.log('incorrect');
            }
        });
    };

    return (
        <>
            <Login handleEmail={handleEmail} handlePassword={handlePassword} onSubmit={onSubmit} />
        </>
    );
}
