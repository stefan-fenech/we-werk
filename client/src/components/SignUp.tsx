import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const theme = createTheme();

export function SignUp() {
    const [jsCheck, setJsCheck] = useState(false);
    const [nodeCheck, setNodeCheck] = useState(false);
    const [reactCheck, setReactCheck] = useState(false);
    const [pythonCheck, setPythonCheck] = useState(false);
    const [psqlCheck, setPsqlCheck] = useState(false);
    const [mongoCheck, setMongoCheck] = useState(false);
    const [htmlCheck, setHtmlCheck] = useState(false);
    const [cssCheck, setCssCheck] = useState(false);
    const [typescriptCheck, setTypescriptCheck] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formBody = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            skills: [
                {
                    js: jsCheck,
                    node: nodeCheck,
                    react: reactCheck,
                    python: pythonCheck,
                    psql: psqlCheck,
                    mongo: mongoCheck,
                    html: htmlCheck,
                    css: cssCheck,
                    typescript: typescriptCheck,
                },
            ],
        };
        axios.post('/api/users', formBody).then(() => {
            navigate('/');
        });
    };

    const handleJsCheck = (event: any) => {
        setJsCheck(event.target.checked);
    };
    const handleNodeCheck = (event: any) => {
        setNodeCheck(event.target.checked);
    };

    const handleReactCheck = (event: any) => {
        setReactCheck(event.target.checked);
    };
    const handlePythonCheck = (event: any) => {
        setPythonCheck(event.target.checked);
    };

    const handlePsqlCheck = (event: any) => {
        setPsqlCheck(event.target.checked);
    };

    const handleMongoCheck = (event: any) => {
        setMongoCheck(event.target.checked);
    };

    const handleHtmlCheck = (event: any) => {
        setHtmlCheck(event.target.checked);
    };

    const handleCssCheck = (event: any) => {
        setCssCheck(event.target.checked);
    };

    const handleTypescriptCheck = (event: any) => {
        setTypescriptCheck(event.target.checked);
    };

    return (
        <div id='signUp-container'>
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth='xs'>
                    <div id='logo'>
                        <img src={logo} height='160px' />
                    </div>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Typography component='h1' variant='h5'>
                            Sign up
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
                                    }}>
                                    <Typography component='h2' variant='h6'>
                                        Technical skills:
                                    </Typography>
                                    <Grid container spacing={0.5} columns={12}>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='JS' color='primary' />} label='JavaScript' id='js' onChange={handleJsCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='Node' color='primary' />} label='NodeJS' onChange={handleNodeCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='React' color='primary' />} label='React' onChange={handleReactCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='Python' color='primary' />} label='Python' onChange={handlePythonCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='PSQL' color='primary' />} label='PostgreSQL' onChange={handlePsqlCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='mongo' color='primary' />} label='MongoDB' onChange={handleMongoCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='html' color='primary' />} label='HTML' onChange={handleHtmlCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='css' color='primary' />} label='CSS' onChange={handleCssCheck} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControlLabel control={<Checkbox value='typescript' color='primary' />} label='TypeScript' onChange={handleTypescriptCheck} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                                Sign Up
                            </Button>
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}
