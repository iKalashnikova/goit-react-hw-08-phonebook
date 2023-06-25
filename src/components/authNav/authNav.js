import { StyledNavLink, Nav } from './authNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to="/Registration">Sign Up</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Login">Login</StyledNavLink>
        </li>
      </ul>
    </Nav>
  );
};
