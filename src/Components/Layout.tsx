import SideBar from './SideBar/SideBar';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="container__column">
        <Header />
      </div>
    </div>
  );
};

export default Layout;
