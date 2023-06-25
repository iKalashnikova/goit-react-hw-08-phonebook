import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authActions';
import { FormContainer, Form, Label, Input, Button , SignUpLink} from './login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({email, password });
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Label>
        <Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Label>
        <Button type="submit" disabled={!email || !password}>
          Login
        </Button>
        <SignUpLink to="/Registration"> Sign Up</SignUpLink>
      </Form>
    </FormContainer>
  );
};

export default Login;
