import  { useState,  } from "react";
import {  useDispatch } from 'react-redux';
import {login} from '../redux/auth/authActions';
import { Link } from 'react-router-dom'

 const Login =  () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        name==='email'?setEmail(value):setPassword(value);
        }


    const handleSubmit = e => {
        e.preventDefault();
        // console.log({email, password });
        dispatch(login({email, password}));
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


export default Login;