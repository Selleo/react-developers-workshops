import React, {Component, Fragment} from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
import Main from './Main';
import RouterPage from './RouterPage';
import ListPage from './Post/ListPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Main>
            <Route path={'/posts'} component={ListPage} />
            <Route path={'/router'} component={RouterPage} />
            <Route exact path="/" component={() => <Redirect to="/posts" />} />
          </Main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
