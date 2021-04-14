import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 1em;
`;

export const HomeImg = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 1000%;
`;
