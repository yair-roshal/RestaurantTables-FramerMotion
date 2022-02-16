import React from 'react';
import Button from '@mui/material/Button';
import { items } from './data';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

console.log('...items :>> ', items ) 

class TablesStore {
  _tables = items ;

  constructor() {
    makeAutoObservable(this);
  }

  // setTablesClass() {
  //   this._tables = setTables(
  //     tables.concat({
  //       id: '101',
  //       capacity: '1',
  //       category: 'Table for 1 person  ',
  //       title: 'Time 00-00-00',
  //       Concat: [102, 103],
  //     }),
  //   );
  // }

  get tables() {
    return this._tables;
  }
}

export const tablesStore = new TablesStore();
 
export const Logic = observer(function PersistenLogic() {

   const [seconds, setSeconds] = React.useState(5);
  const [timerActive, setTimerActive] = React.useState(false);
  const [tables, setTables] = React.useState(items);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  function SearchFreeTable() {
    setSeconds(4);
    console.log('SearchFreeTable :>> ');
    console.log(seconds);

    setTables(
      tables.concat({
        id: '101',
        capacity: '1',
        category: 'Table for 1 person  ',
        title: 'Time 00-00-00',
        Concat: [102, 103],
      }),
    );

    console.log('tables ', tables);
  }



  return (
    <div className="buttonStart">
      {seconds ? (
        <>
          <Button
            variant="contained"
            onClick={() => setTimerActive(!timerActive)}
          >
            {timerActive ? 'Stop' : 'Start'}
          </Button>

          <div style={{ margin:"15px" , color: 'white' }}>{seconds}</div>
        </>
      ) : (
        SearchFreeTable()
      )}
    </div>
  );
})
