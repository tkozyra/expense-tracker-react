import { useState, useEffect } from "react";
import TransactionTypeFilter from "./TransactionTypeFilter";
import {
  TransactionFilterContainer,
  TransactionFilterItem,
  TransactionFilterTitle,
} from "./TransactionFilterContainer";

export default function TransactionFilter({ filterParams, setFilterParams }) {
  const [type, setType] = useState("ALL");

  //update filterParams on transaction type change
  useEffect(() => {
    setFilterParams({ ...filterParams, type: type });
  }, [type]);

  return (
    <TransactionFilterContainer>
      <TransactionFilterItem>
        <TransactionFilterTitle>Transaction type</TransactionFilterTitle>
        <TransactionTypeFilter type={type} setType={setType} />
      </TransactionFilterItem>
    </TransactionFilterContainer>
  );
}
