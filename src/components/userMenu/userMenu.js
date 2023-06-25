import { logOut } from '../redux/auth/authActions';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Container, WelcomeMessage, LogoutButton } from './userMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
      <LogoutButton type="button" onClick={handleLogout}>
        {' '}
        Logout
      </LogoutButton>
    </Container>
  );
};
