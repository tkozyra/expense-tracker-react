import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/RegistrationView";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
