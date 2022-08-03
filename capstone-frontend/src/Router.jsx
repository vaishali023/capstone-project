import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { AboutPage } from './modules/user/pages/About';
import { BlogPage } from './modules/user/pages/Blog';
import { BlogDetailsPage } from './modules/user/pages/BlogDetails';
import { ExplorePage } from './modules/user/pages/Explore';
import { UserHomePage } from './modules/user/pages/Home';
import { BookingPage } from './modules/user/pages/Booking';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={UserHomePage} />
        <Route exact path='/explore' component={ExplorePage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/blog/:id' component={BlogDetailsPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/booking' component={BookingPage} />
      </Switch>
    </BrowserRouter>
  );
}
