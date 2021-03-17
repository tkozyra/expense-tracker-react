import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%);
  min-width: 450px;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0px 2px 10px -2px #898189;
  @media (max-width: 768px) {
    width: 100vw;
    box-shadow: none;
  }
`;

export default function AuthFormContainer(props) {
  return <Container>{props.children}</Container>;
}
