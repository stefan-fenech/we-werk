import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobCard } from './JobCard';
import Navigation from './Navigation';

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

    const handleLogout = () => {
        axios.get('/api/session/destroy', { withCredentials: true }).then((response) => {
            const user = response.data.email;
            navigate('/');
        });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!loading && !user) {
        navigate('/');
    }

    return (
        <>
            <Navigation />
            <div>
                <p>Dashboard for {user.email}</p>
                <p> {(skills.js = true ? 'JS SKILLS' : '')}</p>
            </div>
            <h1 className='job-heading'> Jobs </h1>
            <div id='jobs'>
                {jobs.map((job: any) => (
                    <>
                        <JobCard companyName={job.company} title={job.title} description={job.description} />
                    </>
                ))}
            </div>
        </>
    );
}
