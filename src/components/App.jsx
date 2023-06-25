// import { useEffect } from "react";
import PhoneBooks from './PhoneBooks/PhoneBooks';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Layout from './Layout/Layout';
import Registration from './pages/registration';
import Home from './pages/home';
import { useSelector } from 'react-redux';

const App = () => {
  const profile = useSelector((state) => state.auth.profile);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home/>}/>
        <Route path="/Login" element={profile ?<PhoneBooks/>:<Login />} />
        <Route path="/Registration" element={profile ?<PhoneBooks/>: <Registration />} />
        <Route path="/contacts" element={<PhoneBooks />} />
      </Route>
    </Routes>
  );
};

export default App;
