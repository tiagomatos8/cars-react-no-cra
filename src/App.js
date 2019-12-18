import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import YearsPage from './pages/Years/YearsPage';

const App = () => {
  return (
    <div className='App-component'>
      <Router>
        <>
          <Header />

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
