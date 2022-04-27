import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/logo.png';
import { Chip } from '@mui/material';

export function SignIn(props: any) {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <img src={logo} height='100px' />
                    <Typography component='h1' variant='h5' sx={{ paddingTop: 2 }}>
                        Sign in
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 1 }}></Box>
                    {props.error === true && <Chip label='Incorrect email or password' color='error' variant='outlined' />}
                    <TextField margin='normal' required fullWidth id='email' label='Email' name='email' autoComplete='email' onChange={props.handleEmail} autoFocus />
                    <TextField margin='normal' required fullWidth name='password' label='Password' type='password' id='password' onChange={props.handlePassword} autoComplete='current-password' />
                    <Button fullWidth variant='contained' onClick={props.onSubmit} sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Link to='/signup' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        Don't have an account? Sign Up!
                    </Link>
                    <Link to='/signup-poster' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        Client looking to hire talent? Click here to sign up!
                    </Link>
                </Box>
                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item></Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
