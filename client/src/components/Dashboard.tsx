import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobCard } from './JobCard';
import Navigation from './Navigation';
import _ from 'lodash';

export function Dashboard(props: any) {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [skills, setSkills] = useState<any>([]);
    const [jobs, setJobs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get('/api/session', { withCredentials: true })
            .then((response) => {
                setUser(response.data);
                setSkills(response.data.skills);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios
            .get('/api/jobs', { withCredentials: true })
            .then((response) => {
                setJobs(response.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!loading && !user) {
        navigate('/');
    }

    return (
        <div id='dashboard'>
            <Navigation />
            <Typography variant='h4' sx={{ m: 2, textAlign: 'center' }}>
                {user.firstName} {user.lastName}'s Job Dashboard
            </Typography>
            <div id='jobs'>
                {jobs.map((job: any, index: any) => (
                    <>{_.isEqual(skills, job.skills) && <JobCard key={index} companyName={job.company} title={job.title} shortDesc={job.shortDesc} rate={job.rate} id={job._id} />}</>
                ))}
            </div>
        </div>
    );
}
