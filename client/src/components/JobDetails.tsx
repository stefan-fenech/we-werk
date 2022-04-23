import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';

export function JobDetails(props: any) {
    const [jobs, setJobs] = useState<any>([]);
    const [userID, setUserID] = useState<any>('');
    let { id } = useParams();

    useEffect(() => {
        axios.get(`/api/jobs/${id}`, { withCredentials: true }).then((response) => {
            setJobs([response.data]);
        });
    }, [jobs]);

    useEffect(() => {
        axios.get(`/api/session`, { withCredentials: true }).then((response) => {
            setUserID(response.data._id);
        });
    }, [userID]);

    const handleShortlist = () => {
        axios.patch(`/api/jobs/${id}`, { id: userID }, { withCredentials: true }).then(() => {});
    };

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
            <button onClick={handleShortlist}>I'm interested</button>
        </>
    );
}
