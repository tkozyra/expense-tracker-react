import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/auth";
import { ButtonSecondary } from "../buttons/Button";

export default function LogoutButton() {
  const dispatch = useDispatch();
  let history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  return (
    isLoggedIn && (
      <ButtonSecondary
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Log out
      </ButtonSecondary>
    )
  );
}
