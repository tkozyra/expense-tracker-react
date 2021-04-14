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
  margin: 2em 0;
`;

export const UserProfileDataContainer = styled.div`
  border: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  jusitfy-content: center;
  padding: 1em 2em;
  margin: 1em 0;
`;

export const UserProfileData = styled.div`
  flex-grow: 1;
`;

export const Title = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
`;

export const Value = styled.p`
  margin: 0;
`;
