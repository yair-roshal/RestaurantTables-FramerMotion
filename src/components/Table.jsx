import { useState, useRef, useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import * as React from 'react'
import 'animate.css'

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
    const { table, diners } = props
    const element = document.querySelector('.animate-table')

    let figure = ''
    switch (diners) {
        case 1:
            figure = 'table1'
            break
        case 2:
            figure = 'table2'
            break
        case 3:
            figure = 'table3'
            break
        default:
            figure = 'table4'
            break
    }

    return (
        <Box>
            <Box sx={{ height: 180 }}>
                {table}-{diners}
                <div id={figure} className="animate-table"></div>
            </Box>
        </Box>
    )
}
{
    /* {element.classList.add("animate__animated", "animate__bounceOutLeft")} */
}
{
    /* {document.documentElement.style.setProperty("--animate-duration", "2s")} */
}
