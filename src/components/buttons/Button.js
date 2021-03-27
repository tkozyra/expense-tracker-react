import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const plusIcon = <FontAwesomeIcon icon={faPlus} />;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.4em 1.2em;
  transition: 0.3s ease;

  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
`;

const ButtonPrimary = styled(Button)`
  background: #0077b6;
  border: 1px solid #0077b6;
  &:hover {
    background: #023e8a;
  }
  box-shadow: 1px 1px 2px 0px #848484;
`;

const ButtonSecondary = styled(Button)`
  background: #fff;
  border: 1px solid #dee2e6;
  color: #000;
  &:hover {
    background: #e9ecef;
  }
  box-shadow: 1px 1px 2px 0px #848484;
`;

const ButtonPrimaryRound = styled(ButtonPrimary)`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`;

const ButtonTransactionType = styled.button`
  padding: 0.3em 1em;
  background: #fff;
  border: none;
  background: ${(props) => (props.isCurrent ? "#e9ecef" : "white")};
`;

const ButtonAddTransaction = () => {
  return <ButtonPrimaryRound>{plusIcon}</ButtonPrimaryRound>;
};

export {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransactionType,
  ButtonAddTransaction,
};
