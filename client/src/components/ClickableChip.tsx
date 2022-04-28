import Chip from '@mui/material/Chip';
import { useState } from 'react';

export default function ClickableChip() {
    const [buttonAction, setButtonAction] = useState<any>({
        color: 'primary',
        variant: 'outlined',
    });

    const handleClick = () => {
        setButtonAction({ color: 'success', variant: 'filled' });
    };

    return <Chip label='Place candidate' size='small' variant={buttonAction.variant} color={buttonAction.color} onClick={handleClick} />;
}
