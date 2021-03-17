import styled from "styled-components";

const Container = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 0.3em;
`;

export default function FormInputErrorMessage(props) {
  return (
    <Container>
      <p>{props.message}</p>
    </Container>
  );
}
