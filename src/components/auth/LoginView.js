import { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FormInputErrorMessage from "../form/FormInputErrorMessage";
import { FormContainerAuth } from "../form/FormContainer";
import FormInputPassword from "../form/FormInputPassword";
import { ButtonPrimary } from "../buttons/Button";
import { ButtonContainerForm } from "../buttons/ButtonContainer";
import AuthService from "../../services/AuthService";
import { Alert } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

import { connect, useDispatch } from "react-redux";
import { signin } from "../../actions/auth";

export default function LoginView() {
  const { register, handleSubmit, errors } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = (formData) => {
    setSubmitting(true);
    setShowAlert(false);
    try {
      dispatch(signin(formData.username, formData.password)).then(
        (response) => {
          if (!response.ok) {
            setInvalidCredentials(true);
            setShowAlert(true);
          } else {
            history.replace(from);
          }
        }
      );
    } catch (error) {
      setShowAlert(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainerAuth>
      <h1 className="text-center mt-3 mb-5">Login</h1>

      {invalidCredentials && showAlert && (
        <Alert
          variant={"danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Invalid username or password.
        </Alert>
      )}

      <Form onSubmit={handleSubmit(handleLogin)}>
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
          <Form.Label htmlFor="password">Password</Form.Label>
          <FormInputPassword
            reference={register({
              required: "The Password field is required",
            })}
          />
          {errors.password ? (
            <FormInputErrorMessage message={errors.password.message} />
          ) : null}
        </Form.Group>

        <ButtonContainerForm>
          <ButtonPrimary type="submit" disabled={submitting} width={"100%"}>
            Login
          </ButtonPrimary>
        </ButtonContainerForm>
      </Form>
    </FormContainerAuth>
  );
}

// function mapStateToProps(state) {
//   const { isLoggedIn } = state.auth;
//   return {
//     isLoggedIn,
//   };
// }

// export default connect(mapStateToProps)(LoginView);
