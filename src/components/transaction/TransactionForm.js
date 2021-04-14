import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FormInputErrorMessage from "../form/FormInputErrorMessage";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import { Spinner } from "../../shared/Spinner";
import { ButtonPrimaryLoading, ButtonSecondary } from "../buttons/Button";
import { ButtonContainerForm } from "../buttons/ButtonContainer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.loading ? 0.2 : 1)};
`;

export default function TransactionForm({
  transaction,
  onSubmit,
  dataLoading,
  submitting,
  submitButtonText,
}) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  function handleCancel() {
    history.push("/dashboard");
  }

  return (
    <Container loading={dataLoading}>
      {dataLoading && <Spinner size="50px" />}
      <Form onSubmit={handleSubmit(onSubmit)} style={{ flexGrow: "1" }}>
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

        <ButtonContainerForm>
          <ButtonPrimaryLoading
            loading={submitting ? 1 : 0}
            disabled={submitting}
            marginRight="1em"
          >
            {submitButtonText}
          </ButtonPrimaryLoading>
          <ButtonSecondary onClick={handleCancel}>Cancel</ButtonSecondary>
        </ButtonContainerForm>
      </Form>
    </Container>
  );
}
