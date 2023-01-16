import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';

/**
* Label properties to create.
*/
type Props = {
    className: string,
    disabled: boolean,
    id: string,
    label: string
  }

/**
* Label creation process.
* @param {any} props - The label properties value.
*/
const AtomLabel = (props: Props) =>{
    const { className, disabled, id, label } = props

    return(
        <InputLabel className={className} disabled={disabled} id={id}>{label}</InputLabel>
    )
}

/**
* @return Label.
*/
export default AtomLabel;