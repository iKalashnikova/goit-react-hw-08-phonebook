import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authActions';
import {
  FormContainer,
  Form,
  Label,
  Input,
  Button,
  LoginLink,
} from './registration.styled';

const Registration = () => {
  const dispatch = useDispatch();
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
    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    setEmail('');
    setPassword('');
    setName('');
    // navigate('/Login')
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input type="name" name="name" value={name} onChange={handleChange} placeholder ='Name'/>
        </Label>
        <Label>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </Label>
        <Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder='Password'
          />
        </Label>
        <Button type="submit" disabled={!email || !password || !name}>
          Sign up
        </Button>
        <LoginLink to="/Login"> Login</LoginLink>
      </Form>
    </FormContainer>
  );
};

export default Registration;
