import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Title from '../layouts/dashboard/Title';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import Axios from "axios";
import Box from '@mui/material/Box';
import { Button, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



function preventDefault(event) {
  event.preventDefault();
}

export default function InputForm() {

  const [status, setStatus] = React.useState('no contact made');

  const statusChange = (event) => {
    setStatus(event.target.value);
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        auth.loginAction(input);
      };
    
      const handleInput = (e) => {console.log("change")
      };
      
  return (
    <React.Fragment>
      <Title>Add New Number</Title>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid item container spacing={2}>
                <Grid item xs={4}>
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Phone Number"
                  name="login"
                  autoComplete="off"
                  autoFocus
                  onChange={handleInput}
                /> */}
                <PhoneInput
                fullWidth
                    className="number"
                    country={"lb"}
                    onChange={handleInput}
                />
                </Grid>
                <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Participant"
                  name="login"
                  autoComplete="off"
                  autoFocus
                  onChange={handleInput}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Chain"
                  name="login"
                  autoComplete="off"
                  autoFocus
                  onChange={handleInput}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Level"
                  name="login"
                  autoComplete="off"
                  autoFocus
                  onChange={handleInput}
                />
                </Grid>
                <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Referral"
                  name="login"
                  autoComplete="off"
                  autoFocus
                  onChange={handleInput}
                />
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
                <Grid item xs={2}>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
                </Grid>
                </Grid>
                </Box>
    </React.Fragment>
  );
}
