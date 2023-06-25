import { UserMenu } from 'components/userMenu/userMenu';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from 'components/redux/auth/authActions';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/navigation/navigation';

const AppBar = () => {
const {isLoggedIn} = useAuth()
// const profile = useSelector((state) => state.auth.profile);
const token = useSelector((state) => state.auth.token);

// const dispatch = useDispatch();

// useEffect(()=>{
// token && dispatch(getProfile())
// }, [token, dispatch])

  return (
  <header>
    <Navigation/>
    {isLoggedIn ?  <UserMenu/>  : <AuthNav/>}
  </header>
  )
};

export default AppBar;