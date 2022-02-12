import { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import * as React from "react";
import "./Icon.scss";
import Paper from "@mui/material/Paper";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


const icon = (
  <Paper sx={{ m: 1  , width: 100, height: 100 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.secondary.main,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 5,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export function Icon(props) {
  return <div>{icon}</div>;
}
