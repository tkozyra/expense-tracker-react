import Transaction from "./Transaction";

export default function TransactionList({ transactions, onRemove, onEdit }) {
  return (
    <div className="container">
      {!transactions.length ? (
        <h2>No transactions found.</h2>
      ) : (
        transactions.map((tr) => (
          <Transaction
            key={tr.id}
            transaction={tr}
            onRemove={onRemove}
            onEdit={onEdit}
          ></Transaction>
        ))
      )}
    </div>
  );
}
