import styled from "styled-components";

const TransactionFilterContainer = styled.div`
  padding: 1em 0.5em;

  @media (min-width: 768px) {
    padding: 1em 2em;
  }
`;

const TransactionFilterItem = styled.div`
  margin-bottom: 1em;
`;

const TransactionFilterTitle = styled.p`
  margin: 0.4em;
`;

export {
  TransactionFilterContainer,
  TransactionFilterItem,
  TransactionFilterTitle,
};
