import * as React from 'react'
import Button from '@mui/material/Button';
import './style.css'

/**
* Button properties to create.
*/
type Props = {
    variant: "contained" | "outlined" | "text",
    type: "submit" | "button",
    onClick: any,
    children: React.ReactNode,
    className?: string,
    disabled?: boolean,
    id: string
  }

  /**
  * Button style to create.
  */
  const styleBtn = {
    width: '150px',
    padding: '16px',
    bgcolor: '#4695c5',
    margin: '2% 1% 1% 1%'
}

/**
* Button creation process.
* @param {any} props - The button properties value.
*/
const AtomButton = (props: Props) => {
    const { id, variant, type, onClick, children, className, disabled } = props
  
    return (
      <Button sx={styleBtn} id={id} variant={variant} type={type} onClick={onClick} disabled={disabled} className={className}>{children}</Button>
    )
  }

/**
* Button default creation information.
*/
AtomButton.defaultProps = {
  type: 'button',
  onClick: () => {},
  className: '',
  disabled: false,
}

/**
* @return Button.
*/
export default AtomButton