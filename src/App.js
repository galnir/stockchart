import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Chart from './Chart';
import TimeTabs from './TimeTabs';
import { getData } from './getData';

const App = () => {
  const [time, setTime] = useState('5min');
  const [data, setData] = useState(null);

  useEffect(() => {
    let period, precision;
    switch (time) {
      case '1min':
        period = 1;
        precision = 'Minutes';
        break;
      case '5min':
        period = 5;
        precision = 'Minutes';
        break;
      case '1hour':
        period = 1;
        precision = 'Hours';
        break;
      case '1week':
        period = 168;
        precision = 'Hours';
        break;
      default:
        period = 5;
        precision = 'Minutes';
    }
    getData(period, precision).then((data) => setData(data));
  }, [time]);

  return (
    <Container>
      <TimeTabs time={time} setTime={setTime} />
      <Chart data={data} />
    </Container>
  );
};

export default App;
