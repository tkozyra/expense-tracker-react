import { API_URL } from "../api/Api";

class AuthService {
  login = (username, password) => {
    return fetch(API_URL + "/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  signup = (username, email, password) => {
    return fetch(API_URL + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
  };

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
}

export default new AuthService();
