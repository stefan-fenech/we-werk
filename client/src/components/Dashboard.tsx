import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Dashboard(props: any) {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [skills, setSkills] = useState<any>([]);
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
            <div id='dashboard-nav'>
                {' '}
                Home | Jobs | Profile | <a onClick={handleLogout}> Logout</a>
            </div>
            <div>
                <p>Dashboard for {user.email}</p>
                <p> {(skills.js = true ? 'JS SKILLS' : '')}</p>
            </div>
        </>
    );
}
