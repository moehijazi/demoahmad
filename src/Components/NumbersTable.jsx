import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../layouts/dashboard/Title';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import Axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button, MenuItem } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';


function preventDefault(event) {
    event.preventDefault();
  }
  
  export default function NumbersTable(props) {
    let rows = [];
    const numbers = props.nums;
    {numbers.map( (num) => {

        rows.push({id: num.phone_number, name: num.name, referral: num.Referral, chain: num.chain, level: num.level, status: num.status});
    })}


    const [open, setOpen] = React.useState(false);
    const [toEdit, setToEdit] = useState();

    const handleClickOpen = () => {
        // console.log(e);
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const [status, setStatus] = React.useState('no contact made');

  const statusChange = (event) => {
    setStatus(event.target.value);
  };

    const columns = [
        { field: 'id', headerName: 'Number', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'referral', headerName: 'Referral', width: 150 },
        {
          field: 'chain',
          headerName: 'Chain',
          type: 'number',
          width: 60,
        },
        {
            field: 'level',
            headerName: 'Level',
            type: 'number',
            width: 60,
          },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        },
      ];

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowSelection = 'false'
            // disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10,15]}
            onRowDoubleClick = {handleClickOpen}

          />
          <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            // event.preventDefault();
            // console.log(event);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Edit
          </DialogContentText>
          <InputLabel id="status">Status</InputLabel>
                <Select
                  id="status"
                  value={status}
                  onChange={statusChange}
                  autoWidth
                  label="Status"
                >
                  <MenuItem value={'no contact made'}>No contact made</MenuItem>
                  <MenuItem value={'contact made waiting consent'}>Contact made waiting consent</MenuItem>
                  <MenuItem value={'no answer attempting again'}>No answer attempting again</MenuItem>
                  <MenuItem value={'participated'}>Participated</MenuItem>
                  <MenuItem value={'declined'}>Declined</MenuItem>
                  <MenuItem value={'no answer'}>No answer</MenuItem>
                </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Edit</Button>
        </DialogActions>
      </Dialog>
        </div>
      );

  }
  
  