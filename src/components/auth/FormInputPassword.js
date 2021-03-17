import { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const I = styled.i`
  position: absolute;
  padding: 0 0.6em;
  font-size: 1.2em;
  opacity: 0.7;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function FormInputPassword({ reference }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const eyeIcon = (
    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
  );

  const togglePasswordVisibility = () => {
    setPasswordVisible(passwordVisible ? false : true);
  };

  return (
    <Container>
      <Form.Control
        type={passwordVisible ? "text" : "password"}
        name="password"
        id="password"
        placeholder="Enter password"
        ref={reference}
      />
      <I onClick={togglePasswordVisibility}>{eyeIcon}</I>
    </Container>
  );
}
