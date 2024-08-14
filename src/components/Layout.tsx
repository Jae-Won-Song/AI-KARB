import { ReactNode } from 'react';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import Contents from './Contents';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <SideBar />
      <div className="container__column">
        <Header />
        <Contents>{children}</Contents>
      </div>
    </div>
  );
};

export default Layout;
