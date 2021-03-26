import { ButtonTransactionType } from "../../buttons/Button";
import { ButtonContainerTransactionType } from "../../buttons/ButtonContainer";

export default function TransactionTypeFilter({ setType, type }) {
  return (
    <ButtonContainerTransactionType>
      <ButtonTransactionType
        isCurrent={type === "ALL"}
        onClick={() => setType("ALL")}
      >
        All
      </ButtonTransactionType>
      <ButtonTransactionType
        isCurrent={type === "EXPENSE"}
        onClick={() => setType("EXPENSE")}
      >
        Expense
      </ButtonTransactionType>
      <ButtonTransactionType
        isCurrent={type === "INCOME"}
        onClick={() => setType("INCOME")}
      >
        Income
      </ButtonTransactionType>
    </ButtonContainerTransactionType>
  );
}
