import styled from "styled-components";
import { CurrencySymbols } from "../utils/CurrencySymbols";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import TransactionRemovalModal from "./TransactionRemovalModal";

const I = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1em;
  opacity: 0.8;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

const EditIcon = styled(I)`
  color: black;
  &:hover {
    color: orange;
    transition: 0.2s;
  }
`;

const DeleteIcon = styled(I)`
  color: black;
  &:hover {
    color: red;
    transition: 0.2s;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f3f3f3;
  padding: 1em 0.5em;

  @media (min-width: 768px) {
    padding: 1em 2em;
  }
`;

const Description = styled.p`
  margin: 0;
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

const Date = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

const CurrencyAndAmount = styled.div`
  display: flex;
  font-weight: bold;
  padding-right: 1em;
  margin: 0;

  ${({ transactionType }) =>
    transactionType === "EXPENSE" &&
    `
      color: #c1121f;
    `}
  ${({ transactionType }) =>
    transactionType === "INCOME" &&
    `
      color: #008000;
    `}
`;

const Item = styled.div`
  height: 40px;
  width: 40px;

  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const ItemGrow = styled(Item)`
  flex-grow: 1;
`;

export default function Transaction({ transaction, onRemove, onEdit }) {
  const editIcon = <FontAwesomeIcon icon={faPen} />;
  const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
  const maxDescriptionLength = 18;
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <ItemGrow>
        <Description>
          {transaction.description.length > maxDescriptionLength
            ? transaction.description.substring(0, maxDescriptionLength) + "..."
            : transaction.description}
        </Description>
        <Date>{transaction.date}</Date>
      </ItemGrow>
      <CurrencyAndAmount transactionType={transaction.type}>
        {CurrencySymbols[transaction.currency] !== undefined
          ? CurrencySymbols[transaction.currency]
          : transaction.currency}
        {transaction.amount}
      </CurrencyAndAmount>

      <Link to={"/transactions/edit/" + transaction.id}>
        <Item>
          <EditIcon>{editIcon}</EditIcon>
        </Item>
      </Link>

      <Item onClick={() => setShowModal(true)}>
        <DeleteIcon>{deleteIcon}</DeleteIcon>
      </Item>

      <TransactionRemovalModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onRemove={() => onRemove(transaction.id)}
      />
    </Container>
  );
}
