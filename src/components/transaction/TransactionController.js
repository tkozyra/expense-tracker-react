import { API_URL } from "../../api/Api";
import authHeader from "../../services/auth-header";

const fetchTransactions = async () => {
  const { Authorization } = authHeader();
  return fetch(API_URL + "/transactions/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization,
    },
  });
};

const fetchTransactionById = async (id) => {
  const { Authorization } = authHeader();
  return fetch(API_URL + "/transactions/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization,
    },
  });
};

const putTransaction = async (transaction) => {
  const { Authorization } = authHeader();
  return fetch(API_URL + "/transactions/" + transaction.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization,
    },
    body: JSON.stringify(transaction),
  });
};

const postTransaction = async (transaction) => {
  const { Authorization } = authHeader();
  return await fetch(API_URL + "/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization,
    },
    body: JSON.stringify(transaction),
  });
};

const deleteTransaction = async (id) => {
  const { Authorization } = authHeader();
  return await fetch(API_URL + "/transactions/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: Authorization,
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
