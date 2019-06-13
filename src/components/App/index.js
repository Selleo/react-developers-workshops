import React, { Component, Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
import Main from './Main';
import RouterPage from './RouterPage';
import PostListPage from './Post/ListPage';
import PostDetailsPage from './Post/DetailsPage';
import PostEditPage from './Post/EditPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Main>
            <Switch>
              <Route path={'/posts'} component={PostListPage} />
              <Route path={'/post/:id/edit'} component={PostEditPage} />
              <Route path={'/post/:id'} component={PostDetailsPage} />
              <Route path={'/router'} component={RouterPage} />
              <Route
                exact
                path="/"
                component={() => <Redirect to="/posts" />}
              />
            </Switch>
          </Main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
