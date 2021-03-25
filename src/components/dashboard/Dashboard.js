import TransactionList from "../transaction/TransactionList";
import TransactionListSummary from "../transaction/TransactionListSummary";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  fetchTransactions,
  deleteTransaction,
} from "../transaction/TransactionController";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [transactionsLoading, setTransactionsLoading] = useState(true);
  const currency = "USD";

  function removeTransaction(id) {
    deleteTransaction(id);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  useEffect(() => {
    setTransactionsLoading(true);
    fetchTransactions()
      .then((transactions) => {
        return transactions.json();
      })
      .then((transactions) => setTransactions(transactions));
    setTransactionsLoading(false);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Link to="/transactions/new">
            <Button>Add transaction</Button>
          </Link>
        </div>
      </div>
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
              onRemove={removeTransaction}
            ></TransactionList>
          )}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
