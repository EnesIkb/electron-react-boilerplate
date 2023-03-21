import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_DE } from 'material-react-table/locales/de';
import { Button } from 'react-bootstrap';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Typography } from '@mui/material';
import MaterialTable from '@material-table/core';
import { MTableToolbar } from '@material-table/core';
import { DataGrid, GridToolbar, deDE } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const CustomerList = ({ customer, navigation }) => {
  const columns = [
    { field: 'firstName', headerName: 'Name', width: 180 },
    { field: 'lastName', headerName: 'Nachname', width: 180 },
    {
      field: 'mobileNumber',
      headerName: 'Mobil',
      width: 180,
      editable: true,
    },
    {
      field: 'customerType',
      headerName: 'Typ',
      width: 100,
      editable: true,
    },
  ];

  const navigate = useNavigate();


  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={customer}
        columns={columns}
        localeText={deDE.components.MuiDataGrid.defaultProps.localeText}
        slots={{ toolbar: GridToolbar }}
        onRowDoubleClick= {(rowData,rowState)=>navigate("/customer/view", {state:{userm:rowData.row}})}
      />
    </div>
  );
};

export default CustomerList;
