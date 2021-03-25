import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { FormContainerTransaction } from "../form/FormContainer";
import { postTransaction } from "../transaction/TransactionController";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function NewTransactionView() {
  const [submitting, setSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(true);

  async function onSubmit(transaction) {
    setSubmitting(true);
    setError(null);
    transaction.userId = 55; //
    transaction.currency = "USD"; //

    await postTransaction(transaction).then(
      (response) => {
        setSubmitting(false);
        setRedirect(true);
      },
      (error) => {
        setSubmitting(false);
        setShowAlert(true);
        setError(error);
      }
    );
  }

  return (
    <FormContainerTransaction>
      {redirect && <Redirect to="/dashboard" />}

      <h1>New transaction</h1>

      {error && showAlert && (
        <Alert
          variant={"danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          An error occured while submitting. Please try again.
        </Alert>
      )}

      <TransactionForm
        transaction={{ date: new Date().toISOString().slice(0, 10) }}
        submitting={submitting}
        onSubmit={onSubmit}
        submitButtonText={"Create transaction"}
      />
    </FormContainerTransaction>
  );
}
