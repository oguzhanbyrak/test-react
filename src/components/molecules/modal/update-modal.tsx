import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditForm from '../body/EditRow'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

/**
* Edit row modal creation process.
* @param {any} props - The edit row modal properties value.
*/
const UpdateModal = (props: any) => {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={props.handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" id='updateModal'>
      <Box sx={style}>   
        <EditForm editRow={props.currentRow} updateRow={props.updateRow} setEditing={props.setEditing}/>
      </Box>
    </Modal>
  )
}

export default UpdateModal
