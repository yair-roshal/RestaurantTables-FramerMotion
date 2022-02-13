import React from 'react';
import { items } from './data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function List({ selectedId }) {
    return (
        <ul className="card-list">
            {items.map((card) => (
                <Card
                    key={card.id}
                    {...card}
                    isSelected={card.id === selectedId}
                />
            ))}
        </ul>
    );
}

function Card({ id, capacity, title, category, theme }) {
    return (
        <li className={`card ${theme}`}>
            <div className="card-content-container">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img
                            className="card-image"
                            src={`images/${capacity}.jpg`}
                            alt=""
                        />
                    </motion.div>

                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                        <h2>{id}</h2>

                    </motion.div>

                </motion.div>
            </div>
            <Link to={id} className={`card-open-link`} />
        </li>
    );
}
