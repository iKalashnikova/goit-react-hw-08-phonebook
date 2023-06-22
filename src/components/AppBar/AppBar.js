import { NavLink } from 'react-router-dom';

const AppBar = () => {

  return (
<div>
  <header>
    <nav>
    <ul>
      <li>
        <NavLink to="/Registration">Sign Up</NavLink>
      </li>
      <NavLink to="/Login">Login</NavLink>
    </ul>
    </nav>
  </header>
</div>
  )
};

export default AppBar;