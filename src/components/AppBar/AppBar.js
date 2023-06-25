import { UserMenu } from 'components/userMenu/userMenu';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from 'components/redux/auth/authActions';
import { Navigation } from '../navigation/navigation';

const AppBar = () => {
const profile = useSelector((state) => state.auth.profile);
const token = useSelector((state) => state.auth.token);

const dispatch = useDispatch();

useEffect(()=>{
token && dispatch(getProfile())
}, [token, dispatch])

  return (
  <header>
    {profile ?  <UserMenu/>  : <Navigation/>}
  </header>
  )
};

export default AppBar;