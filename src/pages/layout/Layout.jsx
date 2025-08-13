import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Link to={"/"}>메인 </Link> 
        <Link to={"/posts"}>게시판 </Link>
        <Link to={"/intro"}>소개 </Link>
        <Link to={"/hobby"}>취미 </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    
  );
};

export default Layout;