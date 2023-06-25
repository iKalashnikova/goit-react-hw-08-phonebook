import { logOut } from "../redux/auth/authActions";
import { dellToken } from 'components/redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
    const {user} = useAuth()
const dispatch = useDispatch();
// const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logOut());
        // dellToken();
        // navigate('/');
      }

    return(
        <div>
        <p>Welcome, {user.name}</p>
        <button type='button' onClick={handleLogout}> Logout</button>
         </div>
    )
       }