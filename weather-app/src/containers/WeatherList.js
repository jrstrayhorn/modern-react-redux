import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const renderWeather = (cityData, idx) => {
  const name = cityData.city.name;
  const temps = cityData.list.map(weather => weather.main.temp);

  return (
    <tr key={idx}>
      <td>{name}</td>
      <td>
        <Sparklines height={120} width={180} data={temps}>
          <SparklinesLine color="red" />
        </Sparklines>
      </td>
    </tr>
  );
};

const WeatherList = props => {
  const { weather } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  );
};

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
