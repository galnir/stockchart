import React from 'react';
import moment from 'moment';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

let groupingUnits = [['minute', [5]]];

const Chart = ({ data }) => {
  if (!data) return <p>Loading Chart...</p>;
  const sortedData = data.map((item) => {
    return [moment(item.Date).valueOf(), item.Close];
  });

  const priceFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const config = {
    title: {
      text: 'Apple Stock Price',
      align: 'right',
    },
    time: {
      useUTC: false,
      timezone: 'GMT-4',
    },
    yAxis: [
      {
        opposite: true,
        labels: {
          align: 'left',
          formatter: function () {
            return priceFormat.format(this.value);
          },
        },
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: 'left',
        },
      },
    ],
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
    },
    series: [
      {
        name: 'Price',
        data: sortedData,
        type: 'spline',
        dataGrouping: {
          units: groupingUnits,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: true,
            },
          },
        },
      ],
    },
  };

  return (
    <HighchartsReact
      constructorType={'stockChart'}
      highcharts={Highcharts}
      options={config}
    />
  );
};

export default Chart;
