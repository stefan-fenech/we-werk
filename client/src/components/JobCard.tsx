import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import jsLogo from '../images/jsLogo.png';

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
            <CardMedia component='img' height='140' image={jsLogo} />
            <CardContent>
                <Typography variant='h5' component='div'>
                    {props.companyName}
                </Typography>
                <Typography color='text.secondary'>{props.title}</Typography>
                <Typography variant='overline' color='text.secondary'>
                    {`$${props.rate}`} AUD DAILY
                </Typography>
                <Typography variant='body2' color='text.secondary'>
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
