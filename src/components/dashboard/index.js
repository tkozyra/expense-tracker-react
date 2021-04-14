import TransactionList from "../transactionList";
import TransactionListSummary from "../transactionList/TransactionListSummary";
import { useState, useEffect } from "react";
import {
  fetchTransactions,
  deleteTransaction,
} from "../../services/TransactionService";
import TransactionFilter from "../transactionFilter";
import TransactionListHeader from "../transactionList/TransactionListHeader";
import { Container, ContainerFlex } from "./style";

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
        setTransactionsLoading(false);
      });
  }, []);

  return (
    <ContainerFlex>
      <Container>
        <TransactionListHeader />
        <TransactionFilter
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />
        <TransactionListSummary
          transactions={filteredTransactions}
          currency={currency}
        />

        <TransactionList
          transactions={filteredTransactions}
          transactionsLoading={transactionsLoading}
          onRemove={removeTransaction}
        ></TransactionList>
      </Container>
    </ContainerFlex>
  );
}
