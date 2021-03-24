import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import { FormContainerTransaction } from "../form/FormContainer";
import { useParams } from "react-router-dom";
import { fetchTransactionById } from "./TransactionController";
import { putTransaction } from "../transaction/TransactionController";
import { Redirect } from "react-router-dom";

export default function NewTransactionView() {
  const [transaction, setTransaction] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  function onSubmit(transaction) {
    transaction.id = id;
    transaction.userId = 55; //
    transaction.currency = "USD"; //
    putTransaction(transaction, id);
    console.log(transaction);
    setSubmitted(true);
  }

  useEffect(() => {
    fetchTransactionById(id).then((tr) => setTransaction(tr));
  }, [id]);

  return (
    <FormContainerTransaction>
      {submitted ? <Redirect to="/dashboard" /> : ""}
      <h1>Edit transaction</h1>
      {transaction ? (
        <TransactionForm transaction={transaction} onSubmit={onSubmit} />
      ) : (
        ""
      )}
    </FormContainerTransaction>
  );
}
