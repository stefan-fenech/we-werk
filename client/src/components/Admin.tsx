import { Newspaper, RepeatOneSharp } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';

export function Admin(props: any) {
    const navigate = useNavigate();
    const [userID, setUserID] = useState<any>('');
    const [jobs, setJobs] = useState<any>([]);

    useEffect(() => {
        axios.get('/api/session', { withCredentials: true }).then((response) => {
            setUserID(response.data._id);
        });
    }, []);

    useEffect(() => {
        axios.get(`/api/jobs`, { withCredentials: true }).then((response: any) => {
            let data = response.data;
            let newState = data.map((result: any) => result);
            setJobs(newState);
        });
    }, []);

    return (
        <>
            <AdminNav />
            <p>Admin</p>
            {jobs.map((result: any) => (
                <p>{result.posterID === userID ? result.title : ''}</p>
            ))}
        </>
    );
}
