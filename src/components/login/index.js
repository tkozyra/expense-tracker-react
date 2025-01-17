import { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FormInputErrorMessage from "../../shared/FormInputErrorMessage";
import { FormContainerAuth } from "../../shared/FormContainer";
import FormInputPassword from "../../shared/FormInputPassword";
import { ButtonPrimaryLoading } from "../../shared/buttons/Button";
import { ButtonContainerForm } from "../../shared/buttons/ButtonContainer";
import { Alert } from "react-bootstrap";
import { Redirect, useHistory, useLocation } from "react-router";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/auth";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)`
  text-decoration: underline;
  color: #f3626a;
  margin: 0 0.3em;

  &:hover {
    color: #f46f77;
  }
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
  font-size: 0.9em;
`;

export default function LoginView() {
  const { register, handleSubmit, errors } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = async (formData) => {
    setSubmitting(true);
    setShowAlert(false);
    try {
      await dispatch(signin(formData.username, formData.password)).then(
        (response) => {
          if (!response.ok) {
            setInvalidCredentials(true);
            setShowAlert(true);
          } else {
            console.log(from.pathname);
            if (from.pathname === "/") {
              history.replace("/dashboard");
            } else {
              history.replace(from);
            }
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
      {isLoggedIn && <Redirect to={"/dashboard"} />}
      <h1 className="text-center mt-3 mb-5">Log in</h1>

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
          <ButtonPrimaryLoading
            type="submit"
            loading={submitting ? 1 : 0}
            width={"100%"}
            disabled={submitting}
          >
            Log in
          </ButtonPrimaryLoading>
        </ButtonContainerForm>

        <ContainerFlex>
          <p>You don't have an account yet?</p>
          <CustomLink to="/register">Create an account</CustomLink>
        </ContainerFlex>
      </Form>
    </FormContainerAuth>
  );
}
