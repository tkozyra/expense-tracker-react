import { Redirect, useHistory } from "react-router";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../buttons/Button";
import home from "../../images/home.svg";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1em;
`;

const HomeImg = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 1000%;
`;

export default function HomeView() {
  let history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Container>
      {isLoggedIn && <Redirect to={"/dashboard"} />}
      <Content>
        <h1>Expense tracker</h1>
        <p>Start managing your expenses with us</p>
        <ButtonContainer>
          <ButtonPrimary
            marginRight="1em"
            onClick={() => {
              history.push("/register");
            }}
          >
            Create account
          </ButtonPrimary>
          <ButtonSecondary
            onClick={() => {
              history.push("/login");
            }}
          >
            Log in
          </ButtonSecondary>
        </ButtonContainer>
      </Content>

      <HomeImg src={home} alt="Person managing his expenses" />
    </Container>
  );
}
