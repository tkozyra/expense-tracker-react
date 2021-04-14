import styled from "styled-components";

const Container = styled.div`
  padding: 1em;

  @media (min-width: 768px) {
    padding: 1em 2em;
  }
`;

export default function TransactionsNotFound() {
  return (
    <Container>
      <h3>No transactions found.</h3>
    </Container>
  );
}
