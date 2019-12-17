import React from 'react'
import ReactDOM from 'react-dom';

import './index.css';

const App = props => {
  return (
    <div className='App-component'>
      App component
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));