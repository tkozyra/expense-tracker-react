import styled from "styled-components";

const ButtonTransactionType = styled.button`
  padding: 0.3em 1em;
  background: #fff;
  border: none;
  background: ${(props) => (props.isCurrent ? "#f3f3f3" : "white")};
`;


export { ButtonTransactionType };
