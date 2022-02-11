import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";

// import {Table} from "components";
import { Table } from "../components/Table";
import floor from "../data/floor.json";
import "animate.css";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export function Tables() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Start"
      />

      <Box sx={{ display: "flex" }}>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>

        {floor.map((value, key) => {
          return (
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Table key={key} table={value.table} diners={value.diners} />

              {/* <div>11111111</div>             */}
            </Grow>
          );
        })}
      </Box>
    </Box>
  );
}

// <MenuItem value={value.name} key={key}>{value.name}</MenuItem>
