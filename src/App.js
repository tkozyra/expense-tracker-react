import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegistrationView from "./components/auth/RegistrationView";
import LoginView from "./components/auth/LoginView";
import NewTransactionView from "./components/transaction/NewTransactionView";
import EditTransactionView from "./components/transaction/EditTransactionView";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <RegistrationView />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/transactions/new">
            <NewTransactionView />
          </Route>
          <Route path="/transactions/edit/:id">
            <EditTransactionView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
