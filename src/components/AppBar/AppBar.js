import { NavLink } from 'react-router-dom';
// import { Login } from './pages/login';
// import { Registration } from './pages/registration';

export const AppBar = () => {

  return (
<div>
  <header>
    <ul>
      <li>
        <NavLink to="/Registration">Sign Up</NavLink>
      </li>
      <NavLink to="/Login">Login</NavLink>
    </ul>
  </header>
</div>
  )
};
