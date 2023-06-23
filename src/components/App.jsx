// import { useEffect } from "react";
import PhoneBooks from './PhoneBooks/PhoneBooks';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Layout from './Layout/Layout';
import Registration from './pages/registration';
import Home from './pages/home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/contacts" element={<PhoneBooks />} />
      </Route>
    </Routes>
  );
};

export default App;
