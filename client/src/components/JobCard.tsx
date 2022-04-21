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
    description: string;
}

export function JobCard(props: JobCardProps) {
    return (
        <Card sx={{ minWidth: 300 }}>
            <CardMedia component='img' height='140' image={jsLogo} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.companyName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {props.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Details</Button>
            </CardActions>
        </Card>
    );
}
