import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { JobCard } from './JobCard';
import Navigation from './Navigation';
import _ from 'lodash';

export function Dashboard(props: any) {
    const [skills, setSkills] = useState<any>([]);
    const [jobs, setJobs] = useState<any>([]);
    const [userID, setUserID] = useState<any>('');
    const [userData, setUserData] = useState<any>('');

    useEffect(() => {
        axios.get('/api/session', { withCredentials: true }).then((response) => {
            setSkills(response.data.skills);
            setUserID(response.data._id);
            setUserData(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get('/api/jobs', { withCredentials: true }).then((response) => {
            setJobs(response.data);
        });
    }, []);

    return (
        <div id='dashboard'>
            <Navigation />
            <h1>{userData.firstName}'s Job Dashboard</h1>
            <div id='jobs'>
                {jobs.map((job: any, index: any) => (
                    <>{_.isEqual(skills, job.skills) && <JobCard key={index} companyName={job.company} title={job.title} shortDesc={job.shortDesc} rate={job.rate} id={job._id} />}</>
                ))}
            </div>
        </div>
    );
}
