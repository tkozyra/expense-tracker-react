import { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;

  @media (min-width: 768px) and (max-width: 999px) {
    width: 80vw;
  }

  @media (min-width: 1000px) {
    width: 50vw;
  }
`;

const ContainerFlex = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
`;

const UserProfileDataContainer = styled.div`
  border: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  jusitfy-content: center;
  padding: 1em 2em;
  margin: 1em 0;
`;

const UserProfileData = styled.div`
  flex-grow: 1;
`;

const Title = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
`;

const Value = styled.p`
  margin: 0;
`;

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  return (
    <div>
      {currentUser && (
        <ContainerFlex>
          <Container>
            <h1>Profile</h1>

            <UserProfileDataContainer>
              <UserProfileData>
                <Title>Username</Title>
                <Value>{currentUser.username}</Value>
              </UserProfileData>
            </UserProfileDataContainer>
            <UserProfileDataContainer>
              <UserProfileData>
                <Title>Email address</Title>
                <Value>{currentUser.email}</Value>
              </UserProfileData>
            </UserProfileDataContainer>
          </Container>
        </ContainerFlex>
      )}
    </div>
  );
}
