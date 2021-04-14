import { useState } from "react";
import Pagination from "../pagination/Pagination";
import Transaction from "./Transaction";
import TransactionsNotFound from "./TransactionsNotFound";
import styled from "styled-components";
import { Spinner } from "../../shared/Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10em;
`;

export default function TransactionList({
  transactions,
  transactionsLoading,
  onRemove,
  onEdit,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageUp = () => setCurrentPage(currentPage + 1);
  const pageDown = () => setCurrentPage(currentPage - 1);
  const reset = () => setCurrentPage(1);

  if (transactionsLoading) {
    return (
      <SpinnerContainer>
        <Spinner size="75px" />
      </SpinnerContainer>
    );
  }

  return (
    <Container>
      {!transactions.length ? (
        <TransactionsNotFound />
      ) : (
        currentTransactions.map((tr) => (
          <Transaction
            key={tr.id}
            transaction={tr}
            onRemove={onRemove}
            onEdit={onEdit}
          ></Transaction>
        ))
      )}
      <Pagination
        elementsPerPage={transactionsPerPage}
        totalElements={transactions.length}
        currentPage={currentPage}
        paginate={paginate}
        pageUp={pageUp}
        pageDown={pageDown}
        reset={reset}
      />
    </Container>
  );
}
