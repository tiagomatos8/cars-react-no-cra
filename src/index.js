import React from 'react'
import ReactDOM from 'react-dom';

import './index.scss';

const App = props => {
  return (
    <div className='App-component'>
      App component
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));