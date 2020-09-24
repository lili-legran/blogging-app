import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Article } from './article';
import { Authentication } from './authentication';
import { GlobalFeed } from './globalFeed';

export default () => {
  return (
    <Switch>
      <Route path='/' exact component={GlobalFeed} />
      <Route path='/login' component={Authentication} />
      <Route path='/register' component={Authentication} />
      <Route path='/article/:slag' component={Article} />
    </Switch>
  )
}
