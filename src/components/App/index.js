import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
import Main from './Main';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Main>
          <Home />
        </Main>
      </Fragment>
    );
  }
}

export default App;
