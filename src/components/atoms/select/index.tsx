import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

/**
* 'MenuItem' properties to create.
*/
interface OptionsData  {
  label: string,
  value: number
}

/**
* 'Select' properties to create.
*/
type Props = {
    className: string,
    disabled: boolean,
    onChange: any,
    id: string,
    variant: "outlined" | "filled" | "standard",
    options : Array<OptionsData>,
    value: number
  }

/**
* 'Select' creation process.
* @param {any} props - The 'select' properties value.
*/
  const AtomSelect = (props: Props) => {
    const { className, disabled, id, variant, onChange, options, value } = props
      return (
        <Select className={className} disabled={disabled} id={id} variant={variant} onChange={onChange} value={value}>
          {options.map(item => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))};
        </Select>
      )
  }

/**
* 'Select' default creation information.
*/
AtomSelect.defaultProps = {
  className: '',
  disabled: false,
  onChange: '',
  id: '',
  variant: "outlined",
  options : null,
  value: "0"
}

/**
* @return 'Select'.
*/
export default AtomSelect