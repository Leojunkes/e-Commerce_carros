import React from 'react';
import { Route, Switch } from 'react-router-dom';


import List from './List/index';
import Add from './Add/index';
import Cart from './Cart/index';

function Pages() {
  return (
      <Switch>
          <Route exact path="/" component={List} />
          <Route path="/list" component={List} />
          <Route path="/add" component={Add} />
          <Route path="/cart" component={Cart} />
      </Switch>
  );
}

export default Pages;