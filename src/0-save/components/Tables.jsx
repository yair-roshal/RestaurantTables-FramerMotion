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
import { motion, AnimatePresence,AnimateSharedLayout  } from 'framer-motion'
const bounceAnimation = keyframes`${bounce}`

const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
    /* width: "50px";
  height: "50px";
  background: "red"; */
`

export function Tables() {
    const [tables, setTables] = useState(floor)

    useEffect(() => {
        console.log('1111 :>> ')

        setTimeout(() => {
            let tablesTemp = tables
            let tmp = tablesTemp[0]
            tablesTemp[0] = tablesTemp[4]
            tablesTemp[4] = tmp
            console.log('tablesTemp :>> ', tablesTemp)
            setTables(tablesTemp)
        }, 1000)
    }, [tables])

    const [selectedId, setSelectedId] = useState(null)

    return (
        <Container maxWidth="sm">
            <AnimateSharedLayout>
                <motion.ul layout>
                    {tables.map((item,key) => (
                        <Table
                        key={key}
                        table={item.table}
                        diners={item.diners}
                    /> 
                    ))}
                </motion.ul>
            </AnimateSharedLayout>

            {/* {tables.map((item) => (
                <motion.div
                    layoutId={item.id}
                    onClick={() => setSelectedId(item.id)}
                >
                    <motion.h5>{item.table}</motion.h5>
                    <motion.h2>{item.diners}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId}>
                        <motion.h5>{item.table}</motion.h5>
                        <motion.h2>{item.diners}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence> */}

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '500',
                    height: '500',
                }}
            >
                {tables.map((item, key) => {
                    return (
                        <Table
                            key={key}
                            table={item.table}
                            diners={item.diners}
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
