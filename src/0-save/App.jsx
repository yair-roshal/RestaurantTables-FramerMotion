import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import './styles.scss'
import floor from './data/floor.json'

export function App() {
    return (
        <AnimateSharedLayout>
            <motion.div
                className="wrapper"
                layout
                initial={{ borderRadius: 25 }}
            >
                {floor.map((item, index) => (
                    <div>
                        <Item key={index} item={item} />
                        <span>{index}</span>
                    </div>
                ))}
            </motion.div>
        </AnimateSharedLayout>
    )
}

function Item(props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <motion.div
            className="table"
            layout
            onClick={toggleOpen}
            initial={{ borderRadius: 10 }}
        >
            <motion.div className="avatar" layout />{props.item.table} <motion.div/>

            <AnimatePresence>
                {isOpen && <Content item={props.item} />}
            </AnimatePresence>
        </motion.div>
    )
}

function Content(props) {
    const { table, diners } = props.item

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h5>{table}</motion.h5>
            <motion.h2>{diners}</motion.h2> 
        </motion.div>
    )
}
