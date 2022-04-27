import { Fab, Grid, ListItem } from '@mui/material';
import candidate from '../images/candidate.png';
import client from '../images/client.png';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { Sign } from 'crypto';
import { SignIn } from './SignIn';
import { useState } from 'react';
import axios from 'axios';

export function Index(props: any) {
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
            <div id='index'>
                <div id='logo'>
                    <img src={logo} height='180px' />
                </div>
            </div>
            <div id='login-container'>
                <div id='candidate-login'>
                    <SignIn handleEmail={handleEmail} handlePassword={handlePassword} onSubmit={onSubmit} />
                    {/* <img src={candidate} height='350px' />
                    <Fab variant='extended' size='medium' color='primary' aria-label='add' sx={{ width: '60%' }} onClick={handleClick}>
                        Candidate Login
                    </Fab> */}
                </div>
                <div id='client-login'>
                    <img src={client} height='350px' />
                    {/* <Fab variant='extended' size='medium' color='primary' aria-label='add' sx={{ width: '60%' }} onClick={handleClick}>
                        Client Login
                    </Fab> */}
                </div>
            </div>
        </>
    );
}
