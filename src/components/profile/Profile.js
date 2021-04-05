import { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import styled from "styled-components";
import { ButtonPrimary } from "../buttons/Button";

const Container = styled.div`
  padding: 1em 2em;
`;

const UserProfileDataContainer = styled.div`
  border: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  jusitfy-content: center;
  padding: 1em 2em;
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
        <Container>
          <h1>Profile</h1>

          <UserProfileDataContainer>
            <UserProfileData>
              <Title>Username</Title>
              <Value>{currentUser.username}</Value>
            </UserProfileData>

            <ButtonPrimary>Edit</ButtonPrimary>
          </UserProfileDataContainer>
          <UserProfileDataContainer>
            <UserProfileData>
              <Title>Email address</Title>
              <Value>{currentUser.email}</Value>
            </UserProfileData>

            <ButtonPrimary>Edit</ButtonPrimary>
          </UserProfileDataContainer>
        </Container>
      )}
    </div>
  );
}
