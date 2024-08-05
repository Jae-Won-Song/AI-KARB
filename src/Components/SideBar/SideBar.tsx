import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sidebar.svg';
import dashboard from '../../assets/icon-dashboard.svg';
import dashboardW from '../../assets/icon-dashboard-w.svg';
import alert from '../../assets/icon-alert.svg';
import alertW from '../../assets/icon-alert-w.svg';
import same from '../../assets/icon-same.svg';
import sameW from '../../assets/icon-same-w.svg';
import myPage from '../../assets/icon-my-page.svg';
import myPageW from '../../assets/icon-my-page-w.svg';
import myTask from '../../assets/icon-my-task.svg';
import myTaskW from '../../assets/icon-my-task-w.svg';
import admin from '../../assets/icon-admin.svg';
import adminW from '../../assets/icon-admin-w.svg';
import logout from '../../assets/icon-logout.svg';
import SidebarSection from './SideBarSection';

// 사진 가져오느라 난잡해보여서 나중에 묶어버릴게

const SideBar = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
    setSelectedTitle(section);
  };

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  return (
    <div className="sidebar-container">
      <Link to="/">
        <div className="sidebar-container__logo-box">
          <img src={logo} alt="로고" />
        </div>
      </Link>
      <div className="sidebar-container__content">
        <SidebarSection
          icon={dashboard}
          iconSelected={dashboardW}
          title="대시보드"
          section="dashboard"
          openSection={openSection}
          toggleSection={toggleSection}
          items={[
            { id: 'dashboard-home', name: '홈 대시보드' },
            { id: 'dashboard-admin', name: '관리자용 대시보드' },
          ]}
          selectedTitle={selectedTitle}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
        <SidebarSection
          icon={same}
          iconSelected={sameW}
          title="동일광고"
          section="sameAd"
          openSection={openSection}
          toggleSection={toggleSection}
          items={[{ id: 'sameAd-item1', name: '아이템' }]}
          selectedTitle={selectedTitle}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
        <SidebarSection
          icon={alert}
          iconSelected={alertW}
          title="지적광고"
          section="alertAd"
          openSection={openSection}
          toggleSection={toggleSection}
          items={[{ id: 'alertAd-item1', name: '아이템' }]}
          selectedTitle={selectedTitle}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
        <SidebarSection
          icon={myTask}
          iconSelected={myTaskW}
          title="나의작업"
          section="myTask"
          openSection={openSection}
          toggleSection={toggleSection}
          items={[{ id: 'myTask-item1', name: '아이템' }]}
          selectedTitle={selectedTitle}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
        <SidebarSection
          icon={myPage}
          iconSelected={myPageW}
          title="마이페이지"
          section="myPage"
          openSection={openSection}
          toggleSection={toggleSection}
          items={[
            { id: 'myPage-item1', name: '아이템' },
            { id: 'myPage-item2', name: '아이템' },
          ]}
          selectedTitle={selectedTitle}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
      </div>
      <div className="sidebar-container__footer-container">
        <div className="sidebar-container__footer-container__box">
          <SidebarSection
            icon={admin}
            iconSelected={adminW}
            title="관리자 전용"
            section="admin"
            openSection={openSection}
            toggleSection={toggleSection}
            items={[
              { id: 'myPage-item1', name: '회원 승인 관리' },
              { id: 'myPage-item2', name: '회원 정보 관리' },
              { id: 'myPage-item3', name: '작업자 관리' },
              { id: 'myPage-item4', name: '업무 배정 관리' },
              { id: 'myPage-item5', name: '작업물 등록' },
            ]}
            selectedTitle={selectedTitle}
            selectedItem={selectedItem}
            handleItemClick={handleItemClick}
          />
        </div>
        <div className="sidebar-container__footer-container__avatar-area">
          <div className="sidebar-container__footer-container__avatar-area__content">
            <div className="sidebar-container__footer-container__avatar-area__content-avatar">K</div>
            <div className="sidebar-container__footer-container__avatar-area__content-nameClass">
              <div>김여진</div>
              <div>리더</div>
            </div>
            <img src={logout} alt="로그아웃임" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
