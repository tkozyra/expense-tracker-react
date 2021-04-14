import { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";

import {
  Container,
  ContainerFlex,
  UserProfileDataContainer,
  UserProfileData,
  Title,
  Value,
} from "./style";

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
