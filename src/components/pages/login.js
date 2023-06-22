import  { useState, useDispatch } from "react";
import {authActions} from '../redux/auth/authActions';
import { Link } from 'react-router-dom'

export const Login =  () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        name==='email'?setEmail(value):setPassword(value);
        }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authActions.login({email, password}));
        setEmail('');
        setPassword('');
    };


    return(
<div>
    <form onSubmit={handleSubmit}>
<label>
    Почта
     <input
     type='email'
     name='email'
     value={email}
     onChange={handleChange}
     />
</label>
<label>
    <input
    type='password'
    name='password'
    value={password}
    onChange={handleChange}
    />
</label>
<button 
type='submit'
disabled={!email||!password}
>Login</button>
<Link to='/Registration'> Sign Up</Link>
    </form>
</div>
    )
}