import Chip from '@mui/material/Chip';
import { useState } from 'react';

export default function ClickableChip() {
    const [buttonAction, setButtonAction] = useState<any>({
        color: 'primary',
        label: 'Place candidate',
        variant: 'outlined',
    });

    const handleClick = () => {
        setButtonAction({ color: 'success', variant: 'filled', label: 'Placed!' });
    };

    return <Chip label={buttonAction.label} size='small' variant={buttonAction.variant} color={buttonAction.color} onClick={handleClick} />;
}
