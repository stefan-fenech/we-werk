import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from './BasicModal';
import { useState } from 'react';
import ClickableChip from './ClickableChip';

export interface JobCardAdminProps {
    title: string;
    rate: string;
    shortDesc: string;
    shortlist: string;
    result: any;
}

export function JobCardAdmin(props: JobCardAdminProps) {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };
    return (
        <>
            <Box sx={{ width: 300 }}>
                <Card variant='outlined' square={false}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                            Active Job
                        </Typography>
                        <Typography variant='h5' component='div'>
                            {props.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            ${props.rate}
                        </Typography>
                        <Typography variant='body2'>You have {props.shortlist} shortlisted candidates to view.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' onClick={handleModalOpen}>
                            View Applicants
                        </Button>
                        <Button size='small'>Close job</Button>
                    </CardActions>
                </Card>
            </Box>

            <BasicModal
                handleClose={handleModalClose}
                open={modalVisible}
                candidates={props.result.shortlist.map((candidate: any, index: any) => {
                    return (
                        <p key={index}>
                            {candidate.name} {candidate.last} - {candidate.email} - <ClickableChip />
                        </p>
                    );
                })}
            />
        </>
    );
}
