import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';

export function JobDetails(props: any) {
    const [jobs, setJobs] = useState<any>([]);
    let { id } = useParams();

    useEffect(() => {
        axios.get(`/api/jobs/${id}`, { withCredentials: true }).then((response) => {
            setJobs([response.data]);
        });
    }, []);

    return (
        <>
            <Navigation />
            {jobs.map((job: any, index: any) => (
                <div>
                    <p>{job.company}</p>
                    <p>{job.title}</p>
                    <p>{job.rate}</p>
                    <p>{job.shortDesc}</p>
                    <p>{job.description}</p>
                </div>
            ))}
        </>
    );
}
