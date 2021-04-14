import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, userAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
