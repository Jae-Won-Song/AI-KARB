import React from 'react';
import dashboard from '../../assets/icon-dashboard-w.svg';
import same from '../../assets/icon-same-w.svg';
import alert from '../../assets/icon-alert-w.svg';
import mytask from '../../assets/icon-my-task-w.svg';
import mypage from '../../assets/icon-my-page-w.svg';
import admin from '../../assets/icon-admin-w.svg';
import clickedDashboard from '../../assets/icon-dashboard.svg';
import clickedSame from '../../assets/icon-same.svg';
import clickedAlert from '../../assets/icon-alert.svg';
import clickedMytask from '../../assets/icon-my-task.svg';
import clickedMypage from '../../assets/icon-my-page.svg';
import clickedAdmin from '../../assets/icon-admin.svg';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__container__logo-box">
          <div className="sidebar__container__logo-box__logo">한국광고자율심의기구</div>
        </div>
        <div className="sidebar__container__border" />
        <div className="sidebar__container__nav-box">
          <div className="sidebar__container__nav-box__item">
            <div className="sidebar__container__nav-box__item-bar" />
            <div className="sidebar__container__nav-box__item-area">
              <img className="sidebar__container__nav-box__item-area__icon" src={dashboard} alt="대시보드" />
              <span className="text-content">대시보드</span>
            </div>
          </div>
          <div className="sidebar__container__nav-box__item">
            <div className="sidebar__container__nav-box__item-bar" />
            <div className="sidebar__container__nav-box__item-area">
              <img className="sidebar__container__nav-box__item-area__icon" src={same} alt="동일광고" />
              <span className="text-content">동일광고</span>
            </div>
          </div>
          <div className="sidebar__container__nav-box__item">
            <div className="sidebar__container__nav-box__item-bar" />
            <div className="sidebar__container__nav-box__item-area">
              <img className="sidebar__container__nav-box__item-area__icon" src={alert} alt="지적광고" />
              <span className="text-content">지적광고</span>
            </div>
          </div>
          <div className="sidebar__container__nav-box__item">
            <div className="sidebar__container__nav-box__item-bar" />
            <div className="sidebar__container__nav-box__item-area">
              <img className="sidebar__container__nav-box__item-area__icon" src={mytask} alt="나의작업" />
              <span className="text-content">나의 작업</span>
            </div>
          </div>
          <div className="sidebar__container__nav-box__item">
            <div className="sidebar__container__nav-box__item-bar" />
            <div className="sidebar__container__nav-box__item-area">
              <img className="sidebar__container__nav-box__item-area__icon" src={mypage} alt="마이페이지" />
              <span className="text-content">마이페이지</span>
            </div>
          </div>
        </div>
        <div className="sidebar__container__admin-nav">
          <div className="sidebar__container__admin-nav__item">
            <div className="sidebar__container__admin-nav__item-bar" />
            <div className="sidebar__container__admin-nav__item-area">
              <img className="sidebar__container__admin-nav__item-area__icon" src={admin} alt="관리자메뉴" />
              <span className="text-content">관리자메뉴</span>
            </div>
          </div>
          <div className="sidebar__container__admin-nav__items">
            <span className="sidebar__container__admin-nav__items__title">가입 요청 관리</span>
          </div>
          <div className="sidebar__container__admin-nav__items">
            <span className="sidebar__container__admin-nav__items__title">회원 정보 관리</span>
          </div>
          <div className="sidebar__container__admin-nav__items">
            <span className="sidebar__container__admin-nav__items__title">작업자 관리</span>
          </div>
          <div className="sidebar__container__admin-nav__items">
            <span className="sidebar__container__admin-nav__items__title">업무배정 간리</span>
          </div>
          <div className="sidebar__container__admin-nav__items">
            <span className="sidebar__container__admin-nav__items__title">작업물 등록</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
