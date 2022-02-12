import { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import * as React from "react";
import "animate.css";
import "./Mana.scss";

// const icon = (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="svg" sx={{ width: 100, height: 100 }}>
//       <Box
//         component="polygon"
//         sx={{
//           fill: (theme) => theme.palette.common.white,
//           stroke: (theme) => theme.palette.divider,
//           strokeWidth: 1,
//         }}
//         points="0,100 50,00, 100,100"
//       />
//     </Box>
//   </Paper>
// );

export function Mana(props) {
  
  return (
<div class="row middle-on-small center-on-small">
  <div class="column small-12 medium-6 large-4">
    <a href="#!" class="c-button c-button--gooey">
      Need mana
      <div class="c-button__blobs">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </a>
    
    <p class="pen-info">Hover over the button</p>
  </div>
</div>
  );
}