import React, {useState} from 'react';
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

/**
* Creating modal screen to add row to list.
* @param {any} props - The Creating Modal properties value.
*/
const AddRow = (props: any) => {
    const initialFormState = {id: '', project: '', task: '', status:'Not Started'};
    const [row, setRow] = useState(initialFormState);

    /**
     * Sends out the texts written to the texts.
     * @param {any} event - Written 'value' and written text 'name'.
    */
    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setRow({...row, [name]: value})
    };
    
    return (
        <form onSubmit={e => {
            e.preventDefault();   
            props.addRow(row)
            setRow(initialFormState)
        }}>
            <AtomLabel className='' disabled={false} label='Project' id='projectLabel'/>
            <AtomText type='text' className='' onChange={handleInputChange} value={row.project} disabled={false} variant='outlined' id='project' name='project'/>
            <AtomLabel className='' disabled={false} label='Task' id='taskLabel'/>
            <AtomText type='text' className='' onChange={handleInputChange} value={row.task} disabled={false} variant='outlined' id='task' name='task'/>
            <AtomLabel className='' disabled={false} label='Status' id='statusLabel'/>
            <AtomSelect options={options} className='' disabled={true} id='status' variant='outlined' value={0}/>
            <br/><br/>
            <AtomButton children={'Create'} variant='contained' className='' type='submit' disabled={false} id='btnCreate'/>
        </form>
    )
};

export default AddRow
