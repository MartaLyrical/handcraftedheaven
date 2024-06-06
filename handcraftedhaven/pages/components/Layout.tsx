// components/Layout.tsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
