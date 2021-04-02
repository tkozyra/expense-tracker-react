import { API_URL } from "../api/Api";

const login = (username, password) => {
  return fetch(API_URL + "/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = (username, email, password) => {
  fetch(API_URL + "/auth/signup", {
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

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { login, logout, register, getCurrentUser };
