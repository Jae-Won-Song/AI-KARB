import Logout from '../../assets/icon-logout.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import picture from '../../assets/icon-profileImage-header.svg';
import { logout } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      case '/same-ad/result/':
        return '동일광고 검수';
      case '/issue-ad':
        return '지적광고 목록';
      case '/issue-ad/result/':
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
        return '404Page...';
    }
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('selectedItem');
    localStorage.removeItem('selectedSubItem');
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__title">{headerTitle(location.pathname)}</div>

        <div className="header__container__admin-box">
          <div
            onClick={() => {
              navigate('/mypage');
            }}>
            <img className="header__container__admin-box-picture" src={picture} alt="프로필이미지" />
          </div>
          <div className="header__container__admin-box__content-box">
            <div className="header__container__admin-box__content-box-name">{name}</div>
            <div className="header__container__admin-box__content-box-class">{authority}</div>
          </div>
          <div onClick={handleLogout}>
            <img className="header__container__admin-box-icon" src={Logout} alt="로그아웃" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
