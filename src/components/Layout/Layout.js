import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  AppBar from '../AppBar/AppBar';


 const Layout = () => {
  return (
    <div>
      <AppBar/>
      {/* <Suspense> */}
        <Outlet/>
      {/* </Suspense> */}
    </div>
  );
};

export default Layout
