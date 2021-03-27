import TransactionList from "../transaction/TransactionList";
import TransactionListSummary from "../transaction/TransactionListSummary";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import {
  fetchTransactions,
  deleteTransaction,
} from "../transaction/TransactionController";
import TransactionFilter from "../transaction/filter/TransactionFilter";
import TransactionListHeader from "../transaction/TransactionListHeader";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filterParams, setFilterParams] = useState({ type: "ALL" });
  const [transactionsLoading, setTransactionsLoading] = useState(true);
  const currency = "USD";

  function removeTransaction(id) {
    deleteTransaction(id);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  //filter transactions on filterParams change
  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(
        (transaction) =>
          (filterParams.type !== "ALL"
            ? transaction.type === filterParams.type
            : true) &&
          transaction.description
            .toLowerCase()
            .includes(filterParams.description.toLowerCase())
      )
    );
  }, [transactions, filterParams]);

  //fetch transactions on render
  useEffect(() => {
    setTransactionsLoading(true);
    fetchTransactions()
      .then((transactions) => {
        return transactions.json();
      })
      .then((transactions) => {
        setTransactions(transactions);
        setFilteredTransactions(transactions);
      });
    setTransactionsLoading(false);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <TransactionListHeader />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <TransactionFilter
            filterParams={filterParams}
            setFilterParams={setFilterParams}
          />

          <TransactionListSummary
            transactions={filteredTransactions}
            currency={currency}
          />

          {transactionsLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <TransactionList
              transactions={filteredTransactions}
              onRemove={removeTransaction}
            ></TransactionList>
          )}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
