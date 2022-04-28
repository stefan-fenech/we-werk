import { Fab, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import CheckIcon from '@mui/icons-material/Check';

export function JobDetails(props: any) {
    const [jobs, setJobs] = useState<any>([]);
    const [user, setUser] = useState<any>('');
    const [buttonAction, setButtonAction] = useState<any>({
        color: 'primary',
        message: `I'm Interested`,
    });

    let { id } = useParams();

    useEffect(() => {
        axios.get(`/api/jobs/${id}`, { withCredentials: true }).then((response) => {
            setJobs([response.data]);
        });
    }, [jobs]);

    useEffect(() => {
        axios.get(`/api/session`, { withCredentials: true }).then((response) => {
            setUser(response.data);
        });
    }, [user]);

    const handleShortlist = () => {
        axios.patch(`/api/jobs/${id}`, user, { withCredentials: true }).then(() => {
            setButtonAction({ color: 'success', message: 'Successfully applied!' });
        });
    };

    return (
        <>
            <Navigation />
            <div id='job-details'>
                {jobs.map((job: any, index: any) => (
                    <div>
                        <Typography variant='h4'>{job.company}</Typography>
                        <Typography variant='h5' gutterBottom>
                            {job.title}
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom>
                            Rate: ${job.rate} daily
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 2 }}>
                            {job.description}
                        </Typography>
                    </div>
                ))}
            </div>
            <div id='shortlist-button'>
                <Fab variant='extended' size='medium' color={buttonAction.color} aria-label='add' sx={{ width: '20%' }} onClick={handleShortlist}>
                    <CheckIcon sx={{ mr: 1 }} />
                    {buttonAction.message}
                </Fab>
            </div>
        </>
    );
}
