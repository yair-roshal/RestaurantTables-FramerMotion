import React from 'react';
import Button from '@mui/material/Button';

export function Logic() {
  const [seconds, setSeconds] = React.useState(20);
  const [timerActive, setTimerActive] = React.useState(false);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  function SearchFreeTable() {
    setSeconds(20);
    console.log('SearchFreeTable :>> ');
    console.log(seconds);


	
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

          <div style={{ color: 'white' }}>{seconds}</div>
        </>
      ) : (
        SearchFreeTable()
      )}
    </div>
  );
}
