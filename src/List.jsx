import React, { useEffect } from 'react';
import { items } from './data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { tablesStore } from './Logic';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

 
 console.log('...tables 2222', toJS( tablesStore.tables )  );
 
export function List({ selectedId }) {
  const [tables, setTables] = React.useState(tablesStore.tables);

  useEffect(() => {
    console.log('TablesStore.tables  :>> ', toJS( tablesStore.tables ) )
    setTables( tablesStore.tables ) 
  },[tablesStore.tables] );

  return (
    <div className="card-list">
      { tables.map((card,index) => (
         <Card key={index} {...card} isSelected={card.id === selectedId} />
      ))}
    </div>
  );
}

function Card({ id, capacity, title, category }) {
  return (
    <div className={`card  `}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${capacity}.jpg`} alt="" />
          </motion.div>

          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h5>{title}</h5>
          </motion.div>
          <motion.div className="round">
            <h5>{id}</h5>
          </motion.div>
        </motion.div>
      </div>

      <Link to={id} className={`card-open-link`} />
    </div>
  );
}
export default observer(List);
