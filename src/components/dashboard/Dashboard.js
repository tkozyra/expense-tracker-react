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
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;

  @media (min-width: 768px) and (max-width: 999px) {
    width: 80vw;
  }

  @media (min-width: 1000px) {
    width: 50vw;
  }
`;

const ContainerFlex = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

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
      </Container>
    </ContainerFlex>
  );
}
