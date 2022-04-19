import { useState } from 'react';
import axios from 'axios';
import { Login } from './Login';

export function Home(props: any) {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: any) => {
        setemail(event.target.value);
    };

    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const onSubmit = () => {
        axios.post('http://localhost:3001/api/users', { email: email, password: password }).then(() => {});
    };

    return (
        <>
            <div id='seeker-login'>
                <Login handleemail={handleEmail} handlePassword={handlePassword} onSubmit={onSubmit} />
            </div>
            <div id='poster-login'>
                <Login handleemail={handleEmail} handlePassword={handlePassword} onSubmit={onSubmit} />
            </div>
        </>
    );
}
