import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Events from './views/Events';
import Members from './views/Members';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/events" component={Events}/>
          <Route path="/members" component={Members}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
