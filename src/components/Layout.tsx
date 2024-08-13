import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import Contents from './Contents';

const Layout = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="container__column">
        <Header />
        <Contents />
      </div>
    </div>
  );
};

export default Layout;
