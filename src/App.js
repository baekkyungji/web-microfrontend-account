import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Account from "./Account";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/accounts" component={Account} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
