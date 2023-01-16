import * as React from 'react'
import AtomButton from '../../atoms/buttons';


/**
* Header Buttons creation process.
* @param {any} props - The header buttons properties value.
*/
const AtomHeader : Function = (props: any) => {
  return(
    // props.map((item) => (          
    //   <AtomButton id={item.id} type={item.type} variant={item.variant} onClick={item.onClick} children={item.children} className={item.className} disabled={item.disabled}></AtomButton>
    // ))
    <AtomButton id={props.id} type={props.type} variant={props.variant} onClick={props.onClick} children={props.children} className={props.className} disabled={props.disabled}></AtomButton>      
  )
}

export default AtomHeader;