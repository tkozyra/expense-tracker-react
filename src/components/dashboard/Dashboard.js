import TransactionList from "../transaction/TransactionList";
import TransactionListSummary from "../transaction/TransactionListSummary";
import { useState, useEffect } from "react";
import { API_URL } from "../../api/Api";
import Spinner from "react-bootstrap/Spinner";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [currency, setCurrency] = useState("PLN");
  const [transactionsLoading, setTransactionsLoading] = useState(true);

  const fetchTransactions = async () => {
    setTransactionsLoading(true);
    return await fetch(API_URL + "/transactions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions))
      .then(setTransactionsLoading(false));
  };

  function handleRemove(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    //todo: call api to remove transaction
  }

  function handleEdit(id) {
    //todo: handle edit
    //todo: call api to update transaction
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <TransactionListSummary
            transactions={transactions}
            currency={currency}
          ></TransactionListSummary>
          {transactionsLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <TransactionList
              transactions={transactions}
              onRemove={handleRemove}
              onEdit={handleEdit}
            ></TransactionList>
          )}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
