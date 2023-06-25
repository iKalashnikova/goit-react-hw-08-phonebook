import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/Registration">Sign Up</NavLink>
        </li>
        <NavLink to="/Login">Login</NavLink>
      </ul>
    </nav>
  );
};
