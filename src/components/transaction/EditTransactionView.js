import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import { FormContainerTransaction } from "../form/FormContainer";
import { useParams } from "react-router-dom";
import { fetchTransactionById } from "./TransactionController";
import { putTransaction } from "../transaction/TransactionController";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function NewTransactionView() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();

  const [submitting, setSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  async function onSubmit(transaction) {
    setSubmitting(true);
    setError(null);
    transaction.id = id;
    transaction.userId = 55; //
    transaction.currency = "USD"; //

    await putTransaction(transaction)
      .then((res) => res.json())
      .then(
        (reponses) => {
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

  useEffect(() => {
    fetchTransactionById(id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return;
        }
      })
      .then(
        (response) => {
          setTransaction(response);
        },
        (error) => {
          setSubmitting(false);
        }
      );
  }, [id]);

  return (
    <FormContainerTransaction>
      {redirect && <Redirect to="/dashboard" />}

      {error && showAlert && (
        <Alert
          variant={"danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          An error occured while submitting. Please try again.
        </Alert>
      )}

      {transaction ? (
        <div>
          <h1>Edit transaction</h1>
          <TransactionForm
            transaction={transaction}
            submitting={submitting}
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
