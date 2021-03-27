import { useEffect } from "react";
import styled from "styled-components";
import {
  ButtonPageNumber,
  ButtonArrowLeft,
  ButtonArrowRight,
} from "../buttons/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2em;
`;

export default function Pagination({
  elementsPerPage,
  totalElements,
  currentPage,
  paginate,
  pageUp,
  pageDown,
  reset,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (totalElements <= elementsPerPage) {
      reset();
    }
  }, [totalElements, elementsPerPage, reset]);

  return (
    <div>
      {totalElements > elementsPerPage && (
        <Container>
          <ButtonArrowLeft
            disabled={currentPage === 1}
            onClick={() => pageDown()}
          />

          {pageNumbers.map((number) => (
            <span key={number}>
              <ButtonPageNumber
                current={currentPage === number}
                onClick={() => paginate(number)}
              >
                {number}
              </ButtonPageNumber>
            </span>
          ))}

          <ButtonArrowRight
            disabled={currentPage === pageNumbers.length}
            onClick={() => pageUp()}
          />
        </Container>
      )}
    </div>
  );
}
