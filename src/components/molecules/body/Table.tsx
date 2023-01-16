import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';

/**
* Listed table columns.
*/
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'project',
      headerName: 'Project name',
      width: 150,
      editable: true,
    },
    {
      field: 'task',
      headerName: 'Task name',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'status',
      width: 110,
      editable: true,
    },
  ];
  
  /**
    * Table creation process.
    * @param {any} props - The table properties value.
  */
  const Table : Function = (props: any) => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const { rows, size, updateModal } = props
    return (
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid className='table'
          rows={rows}
          columns={columns}
          pageSize={size}
          rowsPerPageOptions={[5]}
          checkboxSelection
          selectionModel={selectionModel}
          hideFooterSelectedRowCount
          onSelectionModelChange={(selection) => {
            /**
              * Determines and sends the selected row.
            */
            if (selection.length >= 1) {
              const selectionSet = new Set(selectionModel);
              const result = selection.filter((s) => !selectionSet.has(s));
              setSelectionModel(result);
              {updateModal(result)}
            } else {
              setSelectionModel(selection);
            }
          }}
        />
      </Box>
    );
  }
  
  export default Table;