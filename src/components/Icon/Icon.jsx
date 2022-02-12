import { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import * as React from "react";
import "./Icon.scss";
import Paper from "@mui/material/Paper";

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

export function Icon(props) {
  return <div>{icon}</div>;
}
