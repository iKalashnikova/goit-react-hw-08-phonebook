import { UserMenu } from 'components/userMenu/userMenu';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/navigation/navigation';
import { Header } from './AppBar.styled';

const AppBar = () => {
const {isLoggedIn} = useAuth()

  return (
  <Header>
    <Navigation/>
    {isLoggedIn ?  <UserMenu/>  : <AuthNav/>}
  </Header>
  )
};

export default AppBar;