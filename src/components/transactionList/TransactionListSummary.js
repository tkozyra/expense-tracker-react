import { useEffect, useState } from "react";
import styled from "styled-components";
import { CurrencySymbols } from "../utils/CurrencySymbols";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f3f3f3;
  padding: 0.5em;

  @media (min-width: 768px) {
    padding: 1em;
  }
`;

const Item = styled.div`
  padding: 1em 0.5em;

  @media (min-width: 768px) {
    padding: 1em;
  }
`;

const ItemLeft = styled(Item)`
  margin-right: 1em;

  @media (min-width: 768px) {
    margin-right: 2em;
  }
`;

const ItemRight = styled(Item)`
  flex-grow: 1;
  text-align: right;
`;

const Title = styled.p`
  font-size: 0.7em;
  margin: 0;
`;

const Amount = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

export default function TransactionListSummary({ transactions, currency }) {
  const [state, setState] = useState({});

  useEffect(() => {
    let expenseSum = 0;
    let incomeSum = 0;
    for (const transaction of transactions) {
      transaction.type === "EXPENSE"
        ? (expenseSum += transaction.amount)
        : (incomeSum += transaction.amount);
    }
    let balance = incomeSum - expenseSum;
    setState({ expenseSum, incomeSum, balance });
  }, [transactions]);

  return (
    <Container>
      <ItemLeft>
        <Title>Total Expense</Title>
        <Amount>
          {CurrencySymbols[currency] !== undefined
            ? CurrencySymbols[currency]
            : currency}
          {state.expenseSum}
        </Amount>
      </ItemLeft>
      <ItemLeft>
        <Title>Total Income</Title>
        <Amount>
          {CurrencySymbols[currency] !== undefined
            ? CurrencySymbols[currency]
            : currency}
          {state.incomeSum}
        </Amount>
      </ItemLeft>
      <ItemRight>
        <Title>Balance</Title>
        <Amount>
          {state.balance < 0 ? "-" : ""}
          {CurrencySymbols[currency] !== undefined
            ? CurrencySymbols[currency]
            : currency}
          {Math.abs(state.balance)}
        </Amount>
      </ItemRight>
    </Container>
  );
}
