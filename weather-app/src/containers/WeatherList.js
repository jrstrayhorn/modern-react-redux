import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

const renderWeather = cityData => {
  const name = cityData.city.name;
  //const id = cityData.city.id;
  const temps = cityData.list.map(weather => weather.main.temp);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);
  const { lon, lat } = cityData.city.coord;

  return (
    <tr key={name} className="city-data">
      <td>
        <GoogleMap lon={lon} lat={lat} />
      </td>
      <td>
        <Chart data={temps} color="orange" units="F" />
      </td>
      <td>
        <Chart data={pressures} color="green" units="hPa" />
      </td>
      <td>
        <Chart data={humidities} color="black" units="%" />
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
          <th>Temperature (F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  );
};

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
