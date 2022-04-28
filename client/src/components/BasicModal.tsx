import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 18,
    p: 3,
};

export default function BasicModal(props: any) {
    return (
        <div>
            <Modal open={props.open} onClose={props.handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        Candidate Shortlist
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        {props.candidates}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
