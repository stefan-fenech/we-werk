import cover from '../images/cover2.png';
import { useNavigate } from 'react-router-dom';
import { SignIn } from './SignIn';
import { useState } from 'react';
import axios from 'axios';

export function Index(props: any) {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleEmail = (event: any) => {
        setemail(event.target.value);
    };

    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const onSubmit = () => {
        if (password === '' || email === '') {
            return setError(true);
        }
        axios.post('api/session/', { email: email, password: password }, { withCredentials: true }).then((response) => {
            console.log(response);
            if (response.data.email === email) {
                if (response.data.admin) {
                    navigate('/admin');
                } else {
                    navigate('/dashboard');
                }
            } else {
                setError(true);
            }
        });
    };

    return (
        <>
            <div id='login-container'>
                <div id='candidate-login'>
                    <SignIn handleEmail={handleEmail} handlePassword={handlePassword} onSubmit={onSubmit} error={error} />
                </div>
                <div id='client-login'>
                    <img src={cover} height='500px' />
                </div>
            </div>
        </>
    );
}
