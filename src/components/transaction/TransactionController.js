import { API_URL } from "../../api/Api";

const fetchTransactions = async () => {
  return fetch(API_URL + "/transactions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const fetchTransactionById = async (id) => {
  return fetch(API_URL + "/transactions/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const putTransaction = async (transaction, id) => {
  return await fetch(API_URL + "/transactions/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  }).then((response) => response.json());
};

const postTransaction = async (transaction) => {
  return await fetch(API_URL + "/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  }).then((response) => response.json());
};

const deleteTransaction = async (id) => {
  return await fetch(API_URL + "/transactions/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export {
  fetchTransactions,
  fetchTransactionById,
  postTransaction,
  putTransaction,
  deleteTransaction,
};
