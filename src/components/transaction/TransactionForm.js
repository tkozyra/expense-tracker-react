import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FormInputErrorMessage from "../form/FormInputErrorMessage";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

export default function TransactionForm({ transaction, onSubmit }) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  function handleCancel() {
    history.push("/dashboard");
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label htmlFor="Description">Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            id="description"
            placeholder="Enter description"
            defaultValue={transaction.description}
            ref={register({
              required: "The Description field is required",
            })}
          />
          {errors.description ? (
            <FormInputErrorMessage message={errors.description.message} />
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="Date">Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            id="date"
            defaultValue={transaction.date}
            ref={register({
              required: "The Date field is required",
            })}
          />
          {errors.date ? (
            <FormInputErrorMessage message={errors.date.message} />
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="Amount">Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            id="amount"
            defaultValue={transaction.amount}
            placeholder="Enter amount"
            ref={register({
              required: "The Amount field is required",
            })}
          />
          {errors.amount ? (
            <FormInputErrorMessage message={errors.amount.message} />
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control
            as="select"
            name="type"
            defaultValue={transaction.type}
            placeholder="Choose type"
            ref={register({
              required: "The Type field is required",
            })}
          >
            <option>INCOME</option>
            <option>EXPENSE</option>
          </Form.Control>
        </Form.Group>

        <div>
          <Button type="submit" className="w-100 mt-3">
            Submit
          </Button>
          <Button onClick={handleCancel} className="w-100 mt-3">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}