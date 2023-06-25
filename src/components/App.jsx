// import { useEffect } from "react";
import PhoneBooks from './PhoneBooks/PhoneBooks';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Layout from './Layout/Layout';
import Registration from './pages/registration';
import Home from './pages/home';
// import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/authActions';

const App = () => {
  const {isLoggedIn} = useAuth();
const dispatch = useDispatch()
const {isRefreshing} = useAuth();

useEffect(() => {
  dispatch(refreshUser())
}, [dispatch])

  return (
    !isRefreshing && (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home/>}/>
        <Route path="/Login" element={isLoggedIn ?<PhoneBooks/>:<Login />} />
        <Route path="/Registration" element={isLoggedIn ?<PhoneBooks/>: <Registration />} />
        <Route path="/contacts" element={<PhoneBooks />} />
      </Route>
    </Routes>
    )
  );
};

export default App;
