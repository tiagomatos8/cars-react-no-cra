import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Years from './pages/Years/Years';

const App = () => {
  return (
    <div className='App-component'>
      <Router>
        <>
          <Header />

          <Switch>
            
            {/* If the current URL is /years, this route is rendered
              while the rest are ignored */}
            <Route exact path='/' component={Years} />

            <Route exact path='/years' component={Years} />

            <Route exact path='/vehicles' component={props => <div>vehicles<Link to='/years'>Years</Link></div>} />

          </Switch>
        </>
      </Router>
    </div>
  );
};

export default App;
