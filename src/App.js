import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegistrationView from "./components/registration";
import LoginView from "./components/login";
import NewTransactionView from "./components/transactionNew";
import EditTransactionView from "./components/transactionEdit";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import HomeView from "./components/home";
import PrivateRoute from "./components/utils/PrivateRoute";
import NavigationBar from "./components/navigation/NavigationBar";
import { useSelector } from "react-redux";

function App() {
  const userAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar />

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

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
