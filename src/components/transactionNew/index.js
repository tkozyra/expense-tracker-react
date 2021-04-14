import { useState } from "react";
import TransactionForm from "../../shared/TransactionForm";
import { FormContainerTransaction } from "../../shared/FormContainer";
import { postTransaction } from "../../services/TransactionService";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import AuthService from "../../services/AuthService";

export default function NewTransactionView() {
  const [submitting, setSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "An error occured while creating new transaction."
  );
  const [alertVisible, setAlertVisible] = useState(false);

  async function onSubmit(transaction) {
    setSubmitting(true);
    setAlertVisible(false);
    transaction.userId = AuthService.getCurrentUser().id;
    transaction.currency = "USD"; //

    try {
      const response = await postTransaction(transaction);
      if (!response.ok) {
        setAlertVisible(true);
      } else {
        setRedirect(true);
      }
    } catch (error) {
      setAlertVisible(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FormContainerTransaction>
      {redirect && <Redirect to="/dashboard" />}

      <h1>New transaction</h1>

      {errorMessage && alertVisible && (
        <Alert
          variant={"danger"}
          onClose={() => setAlertVisible(false)}
          dismissible
        >
          {errorMessage}
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
