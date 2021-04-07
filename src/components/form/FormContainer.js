import styled from "styled-components";

const FormContainer = styled.div`
  background: #fff;
  @media (max-width: 768px) {
    width: 100vw;
    box-shadow: none;
  }
`;

const FormContainerCentered = styled(FormContainer)`
  min-width: 280px;
  padding: 1em;
  position: absolute;
  transform: translate(-50%);
  left: 50%;

  @media (min-width: 768px) {
    width: 450px;
    padding: 2em;
    box-shadow: 0px 0px 8px 1px #e9ecef;
  }
`;

const FormContainerAuth = styled(FormContainerCentered)`
  top: 15%;
  border-radius: 5px;
`;

const FormContainerTransaction = styled(FormContainerCentered)`
  top: 15%;
  border-radius: 5px;
`;

export { FormContainerTransaction, FormContainerAuth };
