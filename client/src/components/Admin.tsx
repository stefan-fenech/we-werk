import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import BasicModal from './BasicModal';
import { JobCardAdmin } from './JobCardAdmin';

export function Admin(props: any) {
    const [userID, setUserID] = useState<any>('');
    const [jobs, setJobs] = useState<any>([]);
    const [userData, setUserData] = useState<any>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        axios.get('/api/session', { withCredentials: true }).then((response) => {
            setUserID(response.data._id);
            setUserData(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`/api/jobs`, { withCredentials: true }).then((response: any) => {
            let data = response.data;
            let newState = data.map((result: any) => result);
            setJobs(newState);
            console.log(jobs);
        });
    }, []);

    return (
        <>
            <AdminNav />
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center' }}>
                {userData.company}'s Active Jobs
            </Typography>
            <div id='jobs'>
                {jobs.map((result: any) => (
                    <>
                        <p>
                            {result.posterID === userID && <JobCardAdmin shortlist={result.shortlist.length} shortDesc={result.shortDesc} title={result.title} rate={result.rate} clickModal={handleModalOpen} />}
                            <BasicModal
                                handleClose={handleModalClose}
                                open={modalVisible}
                                handleModalOpen={handleModalOpen}
                                candidates={result.shortlist.map((candidate: any) => {
                                    return (
                                        <p>
                                            {candidate.name} {candidate.last} {candidate.email}
                                        </p>
                                    );
                                })}
                            />
                        </p>
                    </>
                ))}
                {/* <BasicModal handleClose={handleModalClose} open={modalVisible} handleModalOpen={handleModalOpen} /> */}
            </div>
        </>
    );
}
