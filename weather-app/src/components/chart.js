import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
  const sum = data.reduce((prev, curr) => prev + curr);
  return Math.round(sum / data.length);
};

const Chart = ({ data, color, units }) => (
  <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(data)} {units}
    </div>
  </div>
);

export default Chart;
