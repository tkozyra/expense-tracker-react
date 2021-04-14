import styled from "styled-components";

const Spinner = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: absolute;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid transparent;
  border-top: 4px solid #f3626a;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export { Spinner };
