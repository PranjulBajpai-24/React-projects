import React from 'react';
import Header from './components/header/header'; // Corrected casing
import Footer from './components/footer/footer'; // Corrected casing
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
