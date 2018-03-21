import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    const { term } = this.state;
    const { error } = this.props;
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value={term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
        {error && (
          <div className="alert alert-danger" role="alert">
            {`${error}. Please try again!`}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(mapStateToProps, actions)(SearchBar);
