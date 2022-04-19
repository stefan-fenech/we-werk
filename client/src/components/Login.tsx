import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export function Login(props: any) {
    return (
        <>
            <h2 className='text-3xl font-bold'>Looking for work?</h2>
            <TextField id='outlined-basic' label='Username' type='text' size='small' onChange={props.handleUsername} />
            <TextField id='outlined-password-input' label='Password' type='password' autoComplete='current-password' size='small' onChange={props.handlePassword} />
            <button className='rounded-full' onClick={props.onSubmit}>
                Login
            </button>
            <Link to='/signup'>Don't have an account? Click to signup.</Link>
        </>
    );
}
