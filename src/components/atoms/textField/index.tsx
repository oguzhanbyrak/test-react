import React, { useState }  from 'react';
import TextField from '@mui/material/TextField';

/**
* TextField properties to create.
*/
type Props = {
    className: string,
    disabled: boolean,
    id: string,
    // label: string,
    variant: "outlined" | "filled" | "standard",
    onChange: any,
    type: "number" | "text",
    value: string,
    name: string
}

/**
* TextField creation process.
* @param {any} props - The TextField properties value.
*/
const TextBox = (props: Props) =>{
  const {  className, disabled, id,  variant,  onChange, type, value, name } = props
  const [message, setMessage] = useState('');
  return (
    <TextField className={className} defaultValue='' name={name} type={type} id={id} value={value} variant={variant} InputProps={{readOnly: false,}} 
        onChange={onChange} />
  )
}

/**
* @return Button.
*/
export default TextBox;