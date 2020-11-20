import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Admin from "./Admin";

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
