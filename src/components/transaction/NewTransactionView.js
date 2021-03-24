import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { FormContainerTransaction } from "../form/FormContainer";
import { postTransaction } from "../transaction/TransactionController";
import { Redirect } from "react-router-dom";

export default function NewTransactionView() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(transaction) {
    transaction.userId = 55; //
    transaction.currency = "USD"; //
    postTransaction(transaction);
    console.log(transaction);
    setSubmitted(true);
  }

  return (
    <FormContainerTransaction>
      {submitted ? <Redirect to="/dashboard" /> : ""}
      <h1>New transaction</h1>
      <TransactionForm
        transaction={{ date: new Date().toISOString().slice(0, 10) }}
        onSubmit={onSubmit}
      />
    </FormContainerTransaction>
  );
}
