import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { UserHomePage } from './modules/user/pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={UserHomePage} />
      </Switch>
    </BrowserRouter>
  );
}
