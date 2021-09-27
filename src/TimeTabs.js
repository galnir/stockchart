import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TimeTabs = ({ time, setTime }) => {
  const handleChange = (___, newTime) => {
    setTime(newTime);
  };

  return (
    <>
      <Tabs
        value={time}
        aria-label='period-precision-tabs'
        onChange={handleChange}
      >
        <Tab value='1min' label='1 minute' />
        <Tab value='5min' label='5 minutes' />
        <Tab value='1hour' label='1 hour' />
        <Tab value='1week' label='1 week' />
      </Tabs>
    </>
  );
};

export default TimeTabs;
