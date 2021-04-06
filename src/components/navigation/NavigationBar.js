import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #002e63;
  margin: 0 1em;

  &:hover {
    text-decoration: none;
  }
`;

export default function NavigationBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    isLoggedIn && (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <MenuItem to="/dashboard">ET</MenuItem>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <MenuItem to="/dashboard">Dashboard</MenuItem>
            <MenuItem to="/profile">Profile</MenuItem>
          </Nav>
          <Nav className="ml-auto ">
            <LogoutButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  );
}
