import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import { FormContainerTransaction } from "../form/FormContainer";
import { useParams } from "react-router-dom";
import { fetchTransactionById } from "./TransactionController";
import { putTransaction } from "../transaction/TransactionController";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { getCurrentUser } from "../../services/AuthService";

export default function NewTransactionView() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Transaction not found.");
  const [alertVisible, setAlertVisible] = useState(false);

  async function onSubmit(transaction) {
    setSubmitting(true);
    setAlertVisible(false);
    setErrorMessage("Transaction not found.");
    transaction.id = id;
    transaction.userId = getCurrentUser().id;
    transaction.currency = "USD"; //

    try {
      const response = await putTransaction(transaction);
      if (!response.ok) {
        setAlertVisible(true);
        setErrorMessage("An error occured while updating transaction.");
      } else {
        setRedirect(true);
      }
    } catch (error) {
      setAlertVisible(true);
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    async function fetchTransaction() {
      try {
        setLoading(true);
        const response = await fetchTransactionById(id);
        const data = await response.json();

        if (!response.ok) {
          setErrorMessage("Transaction not found.");
        } else {
          setTransaction(data);
        }
      } catch (error) {
        setErrorMessage("Transaction not found.");
        setAlertVisible(true);
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    }

    fetchTransaction();
  }, [id]);

  return (
    <FormContainerTransaction>
      {redirect && <Redirect to="/dashboard" />}

      {errorMessage && alertVisible && (
        <Alert
          variant={"danger"}
          onClose={() => setAlertVisible(false)}
          dismissible
        >
          {errorMessage}
        </Alert>
      )}

      {transaction ? (
        <div>
          <h1>Edit transaction</h1>
          <TransactionForm
            transaction={transaction}
            submitting={submitting}
            dataLoading={loading}
            onSubmit={onSubmit}
            submitButtonText={"Update transaction"}
          />
        </div>
      ) : (
        <div>
          <p>Transaction not found.</p>
        </div>
      )}
    </FormContainerTransaction>
  );
}
