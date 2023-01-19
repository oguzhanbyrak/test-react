import React, {useState} from 'react';
import RowList from '../../components/molecules/body/Table';
import AddModal from '../../components/molecules/modal/add-modal'
import UpdateModal from '../../components/molecules/modal/update-modal'
import HeaderButton from '../../components/molecules/header/index'
import DataList from '../../_data/data'    


const CrudPage = () => {
    /**
     * All react hooks.
     */
    const initialFormState = {id: 0, project: '', task: '', status: ''};
    const [currentRow, setCurrentRow] = useState(initialFormState);
    const [datas, setRows] = useState(DataList);
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [list, listOpen] = React.useState(false);
    /**
 * We take all of the new row data to be added and add it to our array.
 * @param {any} data - The row data value.
 */
const addRow = (data:any) => {
    data.id = datas.length + 1;
    setRows([...datas, data]);
    setOpen(false);
};

/**
 * Deletes the selected row from the list.
 */
const deleteRow = () => {
    setRows(datas.filter(data => data.id !== currentRow.id))
    setDeleting(false);
};

/**
 * The process of showing all rows in the list.
 */
const showBtn = () => {
    listOpen(!list);
    setDeleting(false);
};

/**
 * The process of opening the transaction modal.
 */
const handleOpen = () => {
    setOpen(!open);
};

/**
 * Process of sending row information to be edited.
 * @param {any} id - The row id value.
*/
const editRow = (id:any) => {
    setDeleting(true);
    setEditing(true);  
    setCurrentRow({id: DataList[id-1].id, project: DataList[id-1].project, task: DataList[id-1].task, status:DataList[id-1].status})
};

/**
 * Closing the opened modal for the row information to be edited.
 */
const closeEditRow = () => {
    setEditing(false);  
};

/**
 * Updates with the information entered for the selected row from the list.
*/
const updateRow = (id:any, updatedRow:any) => {
    setEditing(false);
    setRows(datas.map(data => (data.id === id ? updatedRow : data)))
};
    return (
        <div>

            <HeaderButton id='showBtn' type='button' variant='contained' onClick={showBtn} children='Show' className='headerBtn' disabled={false}></HeaderButton>
            <HeaderButton id='createBtn' type='button' variant='contained' onClick={handleOpen} children='Create' className='headerBtn' disabled={false}></HeaderButton>
            
            {/* deleting =>  If deletion is allowed.*/ }
            {/*  */}
            { deleting ? (<HeaderButton id='deleteBtn' type='button' variant='contained' onClick={deleteRow} children='Delete' className='headerBtn' disabled={false}></HeaderButton> ) : ( <div></div> ) }

            {/* open =>  If the create button is pressed*/}
            { open ? ( <AddModal addRow={addRow} open={open} onClose={!open}/> ) : ( <div></div> )}
            
            {/* editing =>  If row is selected from table*/}
            { editing ? (<UpdateModal open={open} onClose={!open} editRow={editRow} currentRow={currentRow} editing={editing} updateRow={updateRow} setEditing={closeEditRow} /> ) : ( <div></div> )}

            {/* open =>  If the show button is pressed*/}
            { list ? ( <RowList rows={datas} updateModal={editRow} size={15} /> ) : (<div></div>) }

        </div>
    )    
}

export default CrudPage;

