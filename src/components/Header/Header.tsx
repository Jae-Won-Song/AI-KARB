import logout from '../../assets/icon-logout.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__title">마이페이지</div>
        <div className="header__container__admin-box">
          <div className="header__container__admin-box-picture">K</div>
          <div className="header__container__admin-box__content-box">
            <div className="header__container__admin-box__content-box-name">김여진</div>
            <div className="header__container__admin-box__content-box-class">건달</div>
          </div>
          <img className="header__container__admin-box-icon" src={logout} alt="로그아웃" />
        </div>
      </div>
    </div>
  );
};

export default Header;
