// create a new component
// should produce html

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello World!!</div>;
};

// then put into the DOM (on the page)
ReactDOM.render(<App />, document.getElementById('root'));
