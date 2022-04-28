import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import data from '../images/data.png';
import software from '../images/software.png';
import security from '../images/security.png';
import cloud from '../images/cloud.png';
import { Chip } from '@mui/material';

export interface JobCardProps {
    companyName: string;
    title: string;
    rate: string;
    id: string;
    shortDesc: string;
}

export function JobCard(props: JobCardProps) {
    return (
        <Card sx={{ width: 300 }}>
            {(props.title.includes('Security') && <CardMedia component='img' height='140' image={security} />) ||
                (props.title.includes('Data') && <CardMedia component='img' height='140' image={data} />) ||
                (props.title.includes('Software') && <CardMedia component='img' height='140' image={software} />) ||
                (props.title.includes('Cloud') && <CardMedia component='img' height='140' image={cloud} />)}
            <CardContent>
                <Typography variant='h5' component='div'>
                    {props.companyName}
                </Typography>
                <Typography color='text.secondary'>{props.title}</Typography>
                <Typography variant='overline' color='text.secondary'>
                    {`$${props.rate}`} AUD DAILY
                </Typography>
                <Typography variant='body2' color='text.secondary' gutterBottom>
                    {props.shortDesc}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/job/${props.id}`}>
                    <Button size='small'>Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
