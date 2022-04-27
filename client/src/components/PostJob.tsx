import { Button, Checkbox, Container, Fab, FormControlLabel, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import CheckIcon from '@mui/icons-material/Check';

export function PostJob(props: any) {
    const [jsCheck, setJsCheck] = useState(false);
    const [nodeCheck, setNodeCheck] = useState(false);
    const [reactCheck, setReactCheck] = useState(false);
    const [pythonCheck, setPythonCheck] = useState(false);
    const [psqlCheck, setPsqlCheck] = useState(false);
    const [mongoCheck, setMongoCheck] = useState(false);
    const [htmlCheck, setHtmlCheck] = useState(false);
    const [cssCheck, setCssCheck] = useState(false);
    const [typescriptCheck, setTypescriptCheck] = useState(false);
    const [userID, setUserID] = useState('');
    const [error, setError] = useState(false);
    const [buttonAction, setButtonAction] = useState<any>({
        color: 'primary',
        message: `Post Job`,
    });

    useEffect(() => {
        axios
            .get('/api/session', { withCredentials: true })
            .then((response) => {
                setUserID(response.data._id);
            })
            .finally(() => {});
    }, []);

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
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formBody = {
            companyName: data.get('companyName'),
            title: data.get('title'),
            rate: data.get('rate'),
            description: data.get('description'),
            shortDesc: data.get('shortDesc'),
            posterID: userID,
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
        axios.post('/api/jobs', formBody).then(() => {
            setButtonAction({ color: 'success', message: 'Job posted!' });
        });
    };
    return (
        <>
            <AdminNav />
            <Container component='main' maxWidth='sm'>
                <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Typography variant='h4'>Post new job</Typography>
                    <TextField fullWidth id='standard-basic' name='companyName' label='Company Name' variant='outlined' margin='normal' />
                    <TextField fullWidth id='standard-basic' name='title' label='Job Title' variant='outlined' margin='normal' />
                    <TextField fullWidth id='standard-basic' name='rate' label='Daily Rate in $AUD' variant='outlined' margin='normal' />
                    <TextField fullWidth id='standard-basic' inputProps={{ maxLength: 50 }} name='shortDesc' label='Short Description (limit of 50 characters)' variant='outlined' margin='normal' />
                    <TextField fullWidth id='outline-multiline-static' name='description' label='Job Description' multiline rows={20} margin='normal' />
                    <Typography variant='h5' gutterBottom>
                        Technical Skills Required
                    </Typography>
                    <Grid container spacing={0.5} margin='normal'>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='JS' color='primary' />} label='JavaScript' id='js' onChange={handleJsCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='Node' color='primary' />} label='NodeJS' onChange={handleNodeCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='React' color='primary' />} label='React' onChange={handleReactCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='Python' color='primary' />} label='Python' onChange={handlePythonCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='PSQL' color='primary' />} label='PostgreSQL' onChange={handlePsqlCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='mongo' color='primary' />} label='MongoDB' onChange={handleMongoCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='html' color='primary' />} label='HTML' onChange={handleHtmlCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='css' color='primary' />} label='CSS' onChange={handleCssCheck} />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox value='typescript' color='primary' />} label='TypeScript' onChange={handleTypescriptCheck} />
                        </Grid>
                    </Grid>
                    {/* <Button type='submit' sx={{ mt: 2 }} variant='outlined'>
                        Post Job
                    </Button> */}
                    <Fab variant='extended' size='medium' color={buttonAction.color} aria-label='add' sx={{ width: '40%', mb: 2, mt: 2 }} type='submit'>
                        <CheckIcon sx={{ mr: 1 }} />
                        {buttonAction.message}
                    </Fab>
                </Box>
            </Container>
        </>
    );
}
