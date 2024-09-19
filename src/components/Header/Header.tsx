import logout from '../../assets/icon-logout.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const name = localStorage.getItem('name') || 'unknown';
  const authority = localStorage.getItem('authority') || 'Lv999';

  function headerTitle(pathname: string): string {
    switch (pathname) {
      case '/':
        return '대시보드';
      case '/mypage':
        return '마이페이지';
      case '/dashboard':
        return '대시보드';
      case '/dashboard/admin':
        return '대시보드';
      case '/same-ad':
        return '동일광고 목록';
      case '/issue-ad':
        return '지적광고 목록';
      case '/issue-ad/result':
        return '지적광고 검수';
      case '/my-task':
        return '내 작업 관리';
      case '/admin/approve-user':
        return '가입 요청 관리';
      case '/admin/manage-user':
        return '회원 정보 관리';
      case '/admin/manage-emp':
        return '작업자 관리';
      case '/admin/manage-task':
        return '작업 배분 관리';
      default:
        return '헤더타이틀명';
    }
  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__title">{headerTitle(location.pathname)}</div>

        <div className="header__container__admin-box">
          <div className="header__container__admin-box-picture" />
          <div className="header__container__admin-box__content-box">
            <div className="header__container__admin-box__content-box-name">{name}</div>
            <div className="header__container__admin-box__content-box-class">{authority}</div>
          </div>
          <div
            onClick={() => {
              navigate('/signin');
            }}>
            <img className="header__container__admin-box-icon" src={logout} alt="로그아웃" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
