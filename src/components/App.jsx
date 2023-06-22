// import { useEffect } from "react";
import  PhoneBooks  from './PhoneBooks/PhoneBooks';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Layout from './Layout/Layout';
import Registration from './pages/registration';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/contacts" element={<PhoneBooks />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  );
};

export default App;
