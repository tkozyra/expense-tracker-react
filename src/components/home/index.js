import { Redirect, useHistory } from "react-router";
import { ButtonPrimary, ButtonSecondary } from "../../shared/buttons/Button";
import home from "../../images/home.svg";
import { Container, Content, HomeImg, ButtonContainer } from "./style";
import { useSelector } from "react-redux";

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
