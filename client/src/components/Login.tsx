import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export function Login(props: any) {
    return (
        <>
            <TextField label='Email' type='text' size='small' onChange={props.handleEmail} />
            <TextField label='Password' type='password' autoComplete='current-password' size='small' onChange={props.handlePassword} />
            <button className='rounded-full' onClick={props.onSubmit}>
                Login
            </button>
            <Link to='/signup'>Don't have an account? Click to signup.</Link>
        </>
    );
}
