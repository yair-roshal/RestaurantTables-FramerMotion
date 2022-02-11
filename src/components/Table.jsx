import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import * as React from "react";
import Paper from "@mui/material/Paper";
import "animate.css";

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

export function Table(props) {
  const { table, diners } = props;
  const element = document.querySelector(".my-element");
  return (
    <Box sx={{ height: 180 }}>
      {table}-{diners}
      {/* {icon} */}
      {/* <div id="hexagon"/>  */}
      <div className="my-element"> 121212</div>
      {element.classList.add("animate__animated", "animate__bounceOutLeft")}
      {document.documentElement.style.setProperty('--animate-duration', '2s')}
    </Box>
  );
}
