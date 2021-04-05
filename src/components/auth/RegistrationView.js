import { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FormInputErrorMessage from "../form/FormInputErrorMessage";
import { FormContainerAuth } from "../form/FormContainer";
import FormInputPassword from "../form/FormInputPassword";
import { ButtonContainerForm } from "../buttons/ButtonContainer";
import { ButtonPrimary } from "../buttons/Button";
import { signup } from "../../services/AuthService";
import { Alert } from "react-bootstrap";
import { Redirect } from "react-router";

export default function RegistrationView() {
  const { register, handleSubmit, errors } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const onSubmit = async (formData) => {
    setSubmitting(true);
    console.log(formData);

    await signup(formData.username, formData.email, formData.password).then(
      (response) =>
        response.json().then((data) => {
          console.log(data.message);
          if (response.status && response.status !== 200) {
            setInvalidCredentials(true);
            setShowAlert(true);
            setAlertMessage(data.message);
          } else {
            setRegistrationSuccessful(true);
          }
        }),
      (error) => {
        console.log(error);
      }
    );

    setSubmitting(false);
  };

  if (registrationSuccessful) {
    return <Redirect to="/login" />;
  }

  return (
    <FormContainerAuth>
      <h1 className="text-center mt-3 mb-5">Register</h1>
      {invalidCredentials && showAlert && (
        <Alert
          variant={"danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            ref={register({
              required: "The Username field is required",
            })}
          />
          {errors.username ? (
            <FormInputErrorMessage message={errors.username.message} />
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            ref={register({
              required: "The Email field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email ? (
            <FormInputErrorMessage message={errors.email.message} />
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <FormInputPassword
            reference={register({
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
              required: "The Password field is required",
            })}
          />
          {errors.password ? (
            <FormInputErrorMessage message={errors.password.message} />
          ) : null}
        </Form.Group>

        <ButtonContainerForm>
          <ButtonPrimary type="submit" disabled={submitting} width={"100%"}>
            Register
          </ButtonPrimary>
        </ButtonContainerForm>
      </Form>
    </FormContainerAuth>
  );
}
