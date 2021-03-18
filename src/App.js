import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationView from "./components/auth/RegistrationView";
import LoginView from "./components/auth/LoginView";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <RegistrationView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
