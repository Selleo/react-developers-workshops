import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

import Navbar from './Navbar';
import Main from './Main';
import RouterPage from './RouterPage';
import PostListPage from './Post/ListPage';
import PostDetailsPage from './Post/DetailsPage';
import PostEditPage from './Post/EditPage';
import TodoListPage from './Todo/ListPage';

import store, { history } from '../../store';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Navbar />
          <Main>
            <Switch>
              <Route path={'/todos'} component={TodoListPage} />
              <Route path={'/posts'} component={PostListPage} />
              <Route path={'/post/:id/edit'} component={PostEditPage} />
              <Route path={'/post/:id'} component={PostDetailsPage} />
              <Route path={'/router'} component={RouterPage} />
              <Redirect exact path="/" to="/posts" />
            </Switch>
          </Main>
        </Provider>
      </Router>
    );
  }
}

export default App;
