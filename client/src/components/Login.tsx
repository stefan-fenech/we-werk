import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Login(props: any) {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 1 }}></Box>
                    <TextField margin='normal' required fullWidth id='email' label='Email' name='email' autoComplete='email' onChange={props.handleEmail} autoFocus />
                    <TextField margin='normal' required fullWidth name='password' label='Password' type='password' id='password' onChange={props.handlePassword} autoComplete='current-password' />
                    <Button fullWidth variant='contained' onClick={props.onSubmit} sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Link to='/signup' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        Don't have an account? Sign Up!
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
