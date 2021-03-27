import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  border: none;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #e9ecef;
  padding: 0.5em 1em;
  &:focus {
    outline-color: #dee2e6;
  }
`;

export default function TransactionDescriptionFilter({
  description,
  setDescription,
}) {
  function onChange(event) {
    setDescription(event.target.value);
  }

  return (
    <Form>
      <Input
        type="text"
        placeholder="Search"
        value={description}
        onChange={onChange}
      ></Input>
    </Form>
  );
}
