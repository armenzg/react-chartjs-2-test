import Chart from 'react-chartjs-2';

// eslint-disable-next-line
const ChartJsWrapper = ({ data, options }) => (
  <Chart
    type="bar"
    data={data}
    options={options}
  />
);

export default ChartJsWrapper;
