import { useState } from "react";
import Pagination from "../pagination/Pagination";
import Transaction from "./Transaction";
import TransactionsNotFound from "./TransactionsNotFound";

export default function TransactionList({ transactions, onRemove, onEdit }) {
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

  return (
    <div>
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
    </div>
  );
}
