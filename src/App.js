import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header/Header';
import YearsPage from './pages/Years/YearsPage';

const App = () => {
  const history = createBrowserHistory();
  
  return (
    <div className='App-component'>
      <Router>
        <>
          <Header redirect={history.push} />

          <Switch>

            {/* If path equals / always redirect to /years path */}
            <Route exact path='/' render={props => {props.history.push('/years')}} />

            <Route exact path='/years' render={props => <YearsPage {...props} />} />

            <Route exact path='/vehicles' render={props => <div>vehicles<Link to='/years'>Years</Link></div>} />

          </Switch>
        </>
      </Router>
    </div>
  );
};

export default App;
