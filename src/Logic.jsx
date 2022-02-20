import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { items } from './data';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

// console.log('...items :>> ', items);

class TablesStore {
  _tables = items;

  constructor() {
    makeAutoObservable(this);
  }

  setTablesClass() {
    let tablesTemp = this._tables[0];
    this._tables[0] = this._tables[5];
    this._tables[5] = tablesTemp;
    return this._tables;
  }

  deleteTable() {
    this._tables.splice(1, 1);
    return this._tables;
  }
  addTable() {
    let elem = { Table: 102, Diners: 1, Concat: [101, 103] };
    this._tables.splice(1, 0, elem);
    return this._tables;
  }

  get tables() {
    return this._tables;
  }
}

export const tablesStore = new TablesStore();

export const Logic = observer(function PersistenLogic() {
  const [seconds, setSeconds] = useState(2);
  const [timerActive, setTimerActive] = useState(false);
  const [tables, setTables] = useState(items);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  function SearchFreeTable() {
    // tablesStore.setTablesClass();
    tablesStore.deleteTable();
    tablesStore.addTable();
    setSeconds(2);
    console.log('...tables1111 ', toJS(tablesStore.tables));

    // setTables(
    //   tables.concat({
    //     id: '101',
    //     capacity: '1',
    //     category: 'Table for 1 person  ',
    //     title: 'Time 00-00-00',
    //     Concat: [102, 103],
    //   }),
    // );

    // console.log('tables ', tables);
  }

  return (
    <div className="buttonStart">
      {/* {seconds ? (
        <>
          <Button
            variant="contained"
            onClick={() => setTimerActive(!timerActive)}
          >
            {timerActive ? 'Stop' : 'Start'}
          </Button>

          <div style={{ margin: '15px', color: 'white' }}>{seconds}</div>
        </>
      ) : (
        SearchFreeTable()
      )} */}
    </div>
  );
});
