import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddForm from '../body/AddRow'

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
* Add row modal creation process.
* @param {any} props - The add row modal properties value.
*/
const BasicModal = (props: any) => {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" id='addModal'>
        <Box sx={style}>        
            <AddForm addRow={props.addRow}></AddForm>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;