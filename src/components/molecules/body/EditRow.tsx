import React, {useState, useEffect} from 'react'
import AtomSelect from '../../atoms/select'
import AtomText from '../../atoms/textField'
import AtomButton from '../../atoms/buttons'
import AtomLabel from '../../atoms/label'

/**
* Status information for the 'select' to be created.
*/
const options = [
    {
      label: 'Not Started',
      value: 0,
    },
    {
      label: "In Progress",
      value: 1,
    },
    {
      label: "Completed",
      value: 2,
    },
    {
      label: "Overdue",
      value: 3,
    },
];

const styleBtn = {
  margin: '2% 1% 1% 1%'
}

/**
* Editing modal screen to edit row to list.
* @param {any} props - The Editing Modal properties value.
*/
const EditRowForm = (props: any) => {
    const [row, setRow] = useState(props.editRow);
    useEffect(() => {
      setRow(props.editRow);
    }, [props]);

    /**
     * Sends out the texts written to the texts.
     * @param {any} event - Written 'value' and written text 'name'.
    */
    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setRow({...row, [name]: value});
    }
    return (
        <form onSubmit={event => { event.preventDefault(); props.updateRow(row.id, row); }}>
            <AtomLabel className='' disabled={false} label='Project' id='projectLabel'/>
            <AtomText type='text' className='' onChange={handleInputChange} value={row.project} disabled={false} variant='outlined' id='project' name='project'/>
            <AtomLabel className='' disabled={false} label='Task' id='taskLabel'/>
            <AtomText type='text' className='' onChange={handleInputChange} value={row.task} disabled={false} variant='outlined' id='task' name='task'/>
            <AtomLabel className='' disabled={false} label='Status' id='statusLabel'/>
            <AtomSelect options={options} className='' disabled={true} id='status' variant='outlined' value={0}/>
            <AtomButton children={'Update'} variant='contained' className='uptModalBtn' type='submit' disabled={false} id='btnUpdate'/>
            <AtomButton children={'Cancel'} variant='contained' className='uptModalBtn' type='button' disabled={false} id='btnCancel' onClick={props.setEditing}/>
        </form>
    )
}

export default EditRowForm
