import { useState, useRef, useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Table } from 'components'
import { Mana } from 'components'
import { Icon } from 'components'
import floor from '../data/floor.json'
import 'animate.css'

import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'

const bounceAnimation = keyframes`${bounce}`

const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
    /* width: "50px";
  height: "50px";
  background: "red"; */
`

export function Tables() {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '500',
                    height: '500',
                }}
            >
                {floor.map((value, key) => {
                    return (
                        <Table
                            key={key}
                            table={value.table}
                            diners={value.diners}
                        />
                    )
                })}
            </Box>

            <BouncyDiv
                style={{ width: '50px', height: '50px', background: 'red' }}
            />
            <Mana />
            <Icon />
        </Container>
    )
}

{
    /* <Grow
in={checked}
style={{ transformOrigin: "0 0 0" }}
{...(checked ? { timeout: 1000 } : {})}
>
{icon}
</Grow> */
}
