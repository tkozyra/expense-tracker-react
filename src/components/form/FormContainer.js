import styled from "styled-components";

const FormContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    box-shadow: none;
  }
`;

const FormContainerCentered = styled(FormContainer)`
  min-width: 450px;
  padding: 2em;
  position: absolute;
  transform: translate(-50%);
  left: 50%;
`;

const FormContainerAuth = styled(FormContainerCentered)`
  top: 20%;
  border-radius: 5px;
  box-shadow: 0px 2px 10px -2px #898189;
`;

const FormContainerTransaction = styled(FormContainerCentered)``;

export { FormContainerTransaction, FormContainerAuth };
