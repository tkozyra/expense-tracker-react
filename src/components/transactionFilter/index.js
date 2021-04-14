import { useState, useEffect } from "react";
import TransactionTypeFilter from "./TransactionTypeFilter";
import { TransactionFilterContainer, TransactionFilterItem } from "./style";
import TransactionDescriptionFilter from "./TransactionDescriptionFilter";

export default function TransactionFilter({ filterParams, setFilterParams }) {
  const [type, setType] = useState("ALL");
  const [description, setDescription] = useState("");

  //update filterParams on transaction type change
  useEffect(() => {
    console.log(description);
    setFilterParams({ ...filterParams, type: type, description: description });
  }, [type, description]);

  return (
    <TransactionFilterContainer>
      <TransactionFilterItem>
        <TransactionDescriptionFilter
          description={description}
          setDescription={setDescription}
        />
      </TransactionFilterItem>

      <TransactionFilterItem>
        <TransactionTypeFilter type={type} setType={setType} />
      </TransactionFilterItem>
    </TransactionFilterContainer>
  );
}
