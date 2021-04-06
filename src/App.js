import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationView from "./components/auth/RegistrationView";
import LoginView from "./components/auth/LoginView";
import NewTransactionView from "./components/transaction/NewTransactionView";
import EditTransactionView from "./components/transaction/EditTransactionView";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import HomeView from "./components/home/HomeView";
import LogoutButton from "./components/auth/LogoutButton";
import PrivateRoute from "./components/auth/PrivateRoute";
import store from "./store";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    store.subscribe(() =>
      setUserAuthenticated(store.getState().auth.isLoggedIn)
    );
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <LogoutButton />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
            <PrivateRoute
              path="/dashboard"
              userAuthenticated={userAuthenticated}
            >
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/profile" userAuthenticated={userAuthenticated}>
              <Profile />
            </PrivateRoute>

            <Route path="/register">
              <RegistrationView />
            </Route>

            <PrivateRoute
              path="/transactions/new"
              userAuthenticated={userAuthenticated}
            >
              <NewTransactionView />
            </PrivateRoute>
            <PrivateRoute
              path="/transactions/edit/:id"
              userAuthenticated={userAuthenticated}
            >
              <EditTransactionView />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
