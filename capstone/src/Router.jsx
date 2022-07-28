import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { AboutPage } from './modules/user/pages/About';
import { BlogPage } from './modules/user/pages/Blog';
import { ExplorePage } from './modules/user/pages/Explore';
import { UserHomePage } from './modules/user/pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={UserHomePage} />
        <Route exact path='/explore' component={ExplorePage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}
