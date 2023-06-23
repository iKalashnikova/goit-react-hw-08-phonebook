import { UserMenu } from 'components/userMenu/userMenu';
import { NavLink } from 'react-router-dom';

const AppBar = () => {

  return (
  <header>
    {/* <Navigation/> */}
    <nav>
    <ul>
      <li>
        <NavLink to="/Registration">Sign Up</NavLink>
      </li>
      <NavLink to="/Login">Login</NavLink>
    </ul>
    </nav>
    {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
  </header>
  )
};

export default AppBar;