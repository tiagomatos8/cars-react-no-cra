import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='App.component'>
      <Router>
      <Header logo='https://images.ctfassets.net/cvf73uxjrvk8/4SqBLy8f5lTANevQmm9U6O/5e8a29512ecbf8d5307eb1890e34bcb2/logo-color.svg' />
        <Switch>
          
          {/* If the current URL is /years, this route is rendered
            while the rest are ignored */}
          <Route path='/years'>
            {props => (
              <div>
                years
                <Link to='/vehicles'>Vehicles</Link>
              </div>
            )}
          </Route>

          <Route path='/vehicles'>
            {props => (
              <div>
                vehicles
                <Link to='/years'>Years</Link>
              </div>
            )}
          </Route>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.
            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route path='/'>
            {props => (
              <div>
                years
                <Link to='/vehicles'>Vehicles</Link>
              </div>
            )}
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

export default App;
