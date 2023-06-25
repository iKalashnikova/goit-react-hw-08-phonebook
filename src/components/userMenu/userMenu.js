import { logOut } from "components/redux/auth/authSlice";
import { dellToken } from 'components/redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

export const UserMenu = () => {
    const profile = useSelector((state) => state.auth.profile);
const dispatch = useDispatch();
const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logOut());
        dellToken();
        navigate('/');
        
        
      }

    return(
        <div>
        <p>Welcome, {profile.name}</p>
        <button type='button' onClick={handleLogout}> Logout</button>
         </div>
    )
       }