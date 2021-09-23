import React, { PureComponent} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Account from "./Account";

class App extends PureComponent {
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
