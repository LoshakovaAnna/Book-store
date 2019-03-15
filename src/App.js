import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form   from './screens/Form';
import Favorites from './screens/Favorites';
import List   from './screens/List';
import Single from './screens/Single';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Route exact  path="/"           component={List} />
          <Route        path="/add"        component={Form} />
          <Route        path="/favorites"  component={Favorites} />          
          <Route        path="/books/:id"  component={Single} />
        </div>
      </div>
    );
  }
}

export default App;
