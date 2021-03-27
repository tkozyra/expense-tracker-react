import styled from "styled-components";
import { ButtonAddTransaction } from "../buttons/Button";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 2em;
`;

const ItemLeft = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const Header = styled.h1`
  margin: 0;
`;

export default function TransactionListHeader() {
  return (
    <Container>
      <ItemLeft>
        <Header>Transactions</Header>
      </ItemLeft>
      <Link to="/transactions/new">
        <ButtonAddTransaction />
      </Link>
    </Container>
  );
}
