import {useState, useRef, useEffect } from "react"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import * as floor from 'data';
import floor from './data/floor'
import orders from './data/orders'
// import {orders} from 'data';
 

export function Tables() {
  
  return (
    <>

      <Container maxWidth="sm">
        <h2> Tables </h2>
       

        {/* <Button sx={{m: 1}} variant="contained" onClick={handleSubmit}>Submit</Button> */}
 

              {floor.map((value, key) => {
                return (
                  <h1 value={value.Table} key={key}>{value.Diners}</h1>
                  // <MenuItem value={value.name} key={key}>{value.name}</MenuItem>
 
                )
              })}


 
      </Container>
    </>
  )
}
