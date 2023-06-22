import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/auth/authActions';
import { Link } from 'react-router-dom'

 const Registration = () => {
//   const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({name,  email, password });

    signUp({
        name,
        email,
        password
      })
    // dispatch(authActions.login({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={!email || !password}>
          Sign up
        </button>
        <Link to="/Login"> Login</Link>
      </form>
    </div>
  );
};

export default Registration;
