import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';

const theme = createTheme();

export function SignUpPoster() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formBody = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            companyName: data.get('company-name'),
            email: data.get('email'),
            password: data.get('password'),
            admin: true,
        };
        console.log(formBody);
        axios.post('/api/users/admin', formBody).then(() => {
            navigate('/');
        });
    };

    return (
        <div id='sign-up-client'>
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth='xs' sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 5, justifyContent: 'center' }}>
                    <div id='logo'>
                        <img src={logo} height='100px' />
                    </div>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Typography component='h1' variant='h5'>
                            Looking to hire talent? Sign up!
                        </Typography>
                        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField autoComplete='given-name' name='firstName' required fullWidth id='firstName' label='First Name' autoFocus />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required fullWidth id='lastName' label='Last Name' name='lastName' autoComplete='family-name' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth id='company-name' label='Company Name' name='company-name' autoComplete='company-name' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth id='email' label='Email Address' name='email' autoComplete='email' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth name='password' label='Password' type='password' id='password' autoComplete='new-password' />
                                </Grid>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '5px',
                                    }}></Box>
                            </Grid>
                            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <Link to='/'>Already have an account? Sign in</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}
