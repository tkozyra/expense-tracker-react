import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../api/Api";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FormInputErrorMessage from "./FormInputErrorMessage";
import AuthFormContainer from "./AuthFormContainer";
import FormInputPassword from "./FormInputPassword";

export default function RegistrationView() {
  const { register, handleSubmit, errors } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    setSubmitting(true);
    console.log(formData);

    const response = await fetch(API_URL + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });
    console.log(response);
    setSubmitting(false);
  };

  return (
    <AuthFormContainer>
      <h1 className="text-center mt-3 mb-5">Login</h1>
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

        <div>
          <Button type="submit" disabled={submitting} className="w-100 mt-3">
            Login
          </Button>
        </div>
      </Form>
    </AuthFormContainer>
  );
}
