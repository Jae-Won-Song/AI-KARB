import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IconWithText from './IconWithText';
import SubMenu from './SubMenu';
import dashboard from '../../assets/icon-dashboard-w.svg';
import same from '../../assets/icon-same-w.svg';
import alert from '../../assets/icon-alert-w.svg';
import mytask from '../../assets/icon-my-task-w.svg';
import mypage from '../../assets/icon-my-page-w.svg';
import admin from '../../assets/icon-admin-w.svg';
import toggleDashboard from '../../assets/icon-dashboard.svg';
import toggleSame from '../../assets/icon-same.svg';
import toggleAlert from '../../assets/icon-alert.svg';
import toggleMytask from '../../assets/icon-my-task.svg';
import toggleMypage from '../../assets/icon-my-page.svg';
import toggleAdmin from '../../assets/icon-admin.svg';
import logo from '../../assets/icon-logo.svg';

type MenuItem = '대시보드' | '동일광고' | '지적광고' | '나의 작업' | '마이페이지' | '관리자메뉴';
type SubMenuItem =
  | '홈 대시보드'
  | '관리자 대시보드'
  | '가입 요청 관리'
  | '회원 정보 관리'
  | '작업자 관리'
  | '작업배분 관리';

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>('대시보드');
  const [selectedSubItem, setSelectedSubItem] = useState<SubMenuItem | ''>('홈 대시보드');
  const [authority, setAuthority] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authorityValue = localStorage.getItem('authority');
    setAuthority(authorityValue);
  }, []);

  const handleItemClick = (item: MenuItem, path: string) => {
    setSelectedItem(item);
    setSelectedSubItem('');
    navigate(path);
  };

  const handleSubItemClick = (parentItem: MenuItem, subItem: SubMenuItem, path: string) => {
    setSelectedItem(parentItem);
    setSelectedSubItem(subItem);
    navigate(path);
  };

  const getIcon = (itemName: MenuItem) => {
    switch (itemName) {
      case '대시보드':
        return selectedItem === '대시보드' ? toggleDashboard : dashboard;
      case '동일광고':
        return selectedItem === '동일광고' ? toggleSame : same;
      case '지적광고':
        return selectedItem === '지적광고' ? toggleAlert : alert;
      case '나의 작업':
        return selectedItem === '나의 작업' ? toggleMytask : mytask;
      case '마이페이지':
        return selectedItem === '마이페이지' ? toggleMypage : mypage;
      case '관리자메뉴':
        return selectedItem === '관리자메뉴' ? toggleAdmin : admin;
      default:
        return dashboard;
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__container__logo-box">
          <div className="sidebar__container__logo-box__logo">
            <img src={logo} alt="로고" />
          </div>
        </div>
        <div className="sidebar__container__border" />
        <div className="sidebar__container__nav-box">
          <IconWithText
            icon={getIcon('대시보드')}
            text="대시보드"
            isActive={selectedItem === '대시보드'}
            onClick={() => {
              handleItemClick('대시보드', '/dashboard');
              handleSubItemClick('대시보드', '홈 대시보드', '/dashboard');
            }}
          />
          {authority === '관리자' && (
            <>
              <SubMenu
                text="홈 대시보드"
                isActive={selectedSubItem === '홈 대시보드'}
                onClick={() => handleSubItemClick('대시보드', '홈 대시보드', '/dashboard')}
              />
              <SubMenu
                text="관리자 대시보드"
                isActive={selectedSubItem === '관리자 대시보드'}
                onClick={() => handleSubItemClick('대시보드', '관리자 대시보드', '/dashboard/admin')}
              />
            </>
          )}
          {[
            { name: '동일광고', icon: same, path: '/same-ad' },
            { name: '지적광고', icon: alert, path: '/issue-ad' },
            { name: '나의 작업', icon: mytask, path: '/my-task' },
            { name: '마이페이지', icon: mypage, path: '/mypage' },
          ].map((item) => (
            <IconWithText
              key={item.name}
              icon={getIcon(item.name as MenuItem)}
              text={item.name}
              isActive={selectedItem === item.name}
              onClick={() => handleItemClick(item.name as MenuItem, item.path)}
            />
          ))}
        </div>
        {authority === '관리자' && (
          <div className="sidebar__container__admin-nav">
            <IconWithText
              icon={getIcon('관리자메뉴')}
              text="관리자전용"
              isActive={selectedItem === '관리자메뉴'}
              onClick={() => {
                handleItemClick('관리자메뉴', '/admin/approve-user');
                handleSubItemClick('관리자메뉴', '가입 요청 관리', '/admin/approve-user');
              }}
            />
            <SubMenu
              text="가입 요청 관리"
              isActive={selectedSubItem === '가입 요청 관리'}
              onClick={() => handleSubItemClick('관리자메뉴', '가입 요청 관리', '/admin/approve-user')}
            />
            <SubMenu
              text="회원 정보 관리"
              isActive={selectedSubItem === '회원 정보 관리'}
              onClick={() => handleSubItemClick('관리자메뉴', '회원 정보 관리', '/admin/manage-user')}
            />
            <SubMenu
              text="작업자 관리"
              isActive={selectedSubItem === '작업자 관리'}
              onClick={() => handleSubItemClick('관리자메뉴', '작업자 관리', '/admin/manage-emp')}
            />
            <SubMenu
              text="작업배분 관리"
              isActive={selectedSubItem === '작업배분 관리'}
              onClick={() => handleSubItemClick('관리자메뉴', '작업배분 관리', '/admin/manage-task')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
