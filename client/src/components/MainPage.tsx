import { Button, Paper, TextField } from '@mui/material';

export function MainPage(props: any) {
    return (
        <>
            <div id='seeker-login'>
                <h2 className='text-3xl font-bold'>Looking for work?</h2>
                <TextField id='outlined-basic' label='Username' type='text' size='small' />
                <TextField id='outlined-password-input' label='Password' type='password' autoComplete='current-password' size='small' />
                <button className='rounded-full'>Login</button>
                <p>Don't have an account? Sign up here.</p>
            </div>
            <div id='poster-login'>
                <h2 className='text-3xl font-bold'>Looking for employees?</h2>
                <TextField id='outlined-basic' label='Username' type='text' size='small' />
                <TextField id='outlined-password-input' label='Password' type='password' autoComplete='current-password' size='small' />
                <Button variant='outlined'>Login</Button>
                <p>Don't have an account? Sign up here.</p>
            </div>
        </>
    );
}
