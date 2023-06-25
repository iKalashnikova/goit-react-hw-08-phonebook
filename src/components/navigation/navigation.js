import { useAuth } from 'hooks/useAuth';
import {StyledNavLink, Nav} from './navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
    <ul>
      <li className="home-link">
        <StyledNavLink to="/" >
          Home
        </StyledNavLink>
      </li>
      {isLoggedIn && (
        <li>
          <StyledNavLink to="/contacts">
            Contacts
          </StyledNavLink>
        </li>
      )}
    </ul>
  </Nav>
  );
};
