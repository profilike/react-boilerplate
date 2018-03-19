import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Page from './containers/Page/Page';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Page} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
