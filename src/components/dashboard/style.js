import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;

  @media (min-width: 768px) and (max-width: 999px) {
    width: 80vw;
  }

  @media (min-width: 1000px) {
    width: 50vw;
  }
`;

export const ContainerFlex = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
