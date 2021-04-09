import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const arrowLeftIcon = <FontAwesomeIcon icon={faAngleLeft} />;
const arrowRightIcon = <FontAwesomeIcon icon={faAngleRight} />;

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
  background: #f3626a;
  border: 1px solid #f3626a;
  &:hover {
    background: #f46f77;
  }
`;

const ButtonSecondary = styled(Button)`
  background: #fff;
  border: 1px solid #f3626a;
  color: #f3626a;
`;

const ButtonPrimaryRound = styled(ButtonPrimary)`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 0px #848484;

  @media (max-width: 600px) {
    position: fixed;
    z-index: 20;
    bottom: 30px;
    left: 30px;
  }
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

const ButtonPagination = styled.button`
  background: #e9ecef;
  border: 1px solid #dee2e6;
  border-radius: 100px;
  padding: 0.5em 1em;
  margin: 0 0.2em;
`;

const ButtonArrowLeft = ({ onClick, disabled }) => {
  return (
    <ButtonPagination onClick={onClick} disabled={disabled}>
      {arrowLeftIcon}
    </ButtonPagination>
  );
};

const ButtonArrowRight = ({ onClick, disabled }) => {
  return (
    <ButtonPagination onClick={onClick} disabled={disabled}>
      {arrowRightIcon}
    </ButtonPagination>
  );
};

const ButtonPageNumber = styled(ButtonPagination)`
  background: ${(props) => (props.current ? "#f3626a" : "#e9ecef")};
  color: ${(props) => (props.current ? "#ffffff" : "#000000")};
`;

export {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransactionType,
  ButtonPageNumber,
  ButtonArrowRight,
  ButtonArrowLeft,
  ButtonAddTransaction,
};