'use client';
import { useState } from 'react';
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <header>
      <HeaderNav showSidebar={showSidebar} />
      <Sidebar isSidebarVisible={isSidebarVisible} hideSidebar={hideSidebar} />
    </header>
  );
};

export default Header;
