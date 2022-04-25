import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface JobCardAdminProps {
    title: string;
    rate: string;
    shortDesc: string;
    shortlist: string;
}

export function JobCardAdmin(props: JobCardAdminProps) {
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
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}