import logo from '../../assets/icon-logo.svg';
import dashboard from '../../assets/icon-dashboard.svg';
import same from '../../assets/icon-same.svg';
import alert from '../../assets/icon-alert.svg';
import mytask from '../../assets/icon-my-task.svg';
import mypage from '../../assets/icon-my-page.svg';
import admin from '../../assets/icon-admin.svg';
import arrow from '../../assets/icon-arrow.svg';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__container__logo-box">
          <img src={logo} alt="로고사진임" />
        </div>
        <div className="sidebar__container__logo-border" />
        <div className="sidebar__container__nav-box">
          <div className="sidebar__container__nav-box__user">
            <div className="sidebar__container__nav-box__user-nav">
              <div className="sidebar__container__nav-box__user-nav-bar" />
              <img className="sidebar__container__nav-box__user-nav-icon" src={dashboard} alt="대시보드아이콘임" />
              <div className="sidebar__container__nav-box__user-nav-title">대시보드</div>
            </div>
            <div className="sidebar__container__nav-box__user-nav">
              <div className="sidebar__container__nav-box__user-nav-bar" />
              <img className="sidebar__container__nav-box__user-nav-icon" src={same} alt="동일광고아이콘임" />
              <div className="sidebar__container__nav-box__user-nav-title">동일광고</div>
            </div>
            <div className="sidebar__container__nav-box__user-nav">
              <div className="sidebar__container__nav-box__user-nav-bar" />
              <img className="sidebar__container__nav-box__user-nav-icon" src={alert} alt="지적광고아이콘임" />
              <div className="sidebar__container__nav-box__user-nav-title">지적광고</div>
            </div>
            <div className="sidebar__container__nav-box__user-nav">
              <div className="sidebar__container__nav-box__user-nav-bar" />
              <img className="sidebar__container__nav-box__user-nav-icon" src={mytask} alt="나의작업아이콘임" />
              <div className="sidebar__container__nav-box__user-nav-title">나의 작업</div>
            </div>
            <div className="sidebar__container__nav-box__user-nav">
              <div className="sidebar__container__nav-box__user-nav-bar" />
              <img className="sidebar__container__nav-box__user-nav-icon" src={mypage} alt="마이페이지아이콘임" />
              <div className="sidebar__container__nav-box__user-nav-title">마이페이지</div>
            </div>
          </div>
          <div className="sidebar__container__nav-box__manager">
            <div className="sidebar__container__nav-box__manager-nav">
              <div className="sidebar__container__nav-box__manager-nav-bar" />
              <img className="sidebar__container__nav-box__manager-nav-icon" src={admin} alt="관리자전용아이콘임" />
              <div className="sidebar__container__nav-box__manager-nav-title">관리자 전용</div>
              <img className="sidebar__container__nav-box__manager-nav-arrow" src={arrow} alt="화살임" />
            </div>
            <div className="sidebar__container__nav-box__list">
              <div className="sidebar__container__nav-box__list-item">· 회원 승인 관리</div>
              <div className="sidebar__container__nav-box__list-item">· 회원 정보 관리</div>
              <div className="sidebar__container__nav-box__list-item">· 작업자 관리</div>
              <div className="sidebar__container__nav-box__list-item">· 업무배정 관리</div>
              <div className="sidebar__container__nav-box__list-item">· 작업물 등록</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
