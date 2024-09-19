import { useState } from 'react';
import profileImage from '../../assets/profileImage-mypage.svg';
import bg from '../../assets/bg-mypage.svg';
import EditProfileForm from './EditProfileForm';
import PwdChange from './PwdChange';

const EditProfile = () => {
  const [editProfileForm, setEditProfileForm] = useState(1);
  const [pwdChangeForm, setPwdChangeForm] = useState(0);

  const name = localStorage.getItem('name') || 'unknown';
  const authority = localStorage.getItem('authority') || 'unknown';

  return (
    <section className="mypage">
      <div className="mypage__container">
        <div className="mypage__container__profile-area">
          <img className="mypage__container__profile-area__bg-image" src={bg} alt="마이페이지 배경사진" />
          <img className="mypage__container__profile-area-image" src={profileImage} alt="프로필사진" />
          <div className="mypage__container__profile-area__content">
            <div className="mypage__container__profile-area__content-name">{name}</div>
            <div className="mypage__container__profile-area__content-class">{authority}</div>
          </div>
        </div>
        <nav className="mypage__container__nav">
          <div
            className={`mypage__container__nav__edit-info ${editProfileForm === 1 ? 'active' : ''}`}
            onClick={() => {
              setEditProfileForm(1);
              setPwdChangeForm(0);
            }}>
            개인정보수정
          </div>
          <div
            className={`mypage__container__nav__edit-password ${pwdChangeForm === 1 ? 'active' : ''}`}
            onClick={() => {
              setPwdChangeForm(1);
              setEditProfileForm(0);
            }}>
            비밀번호 변경
          </div>
          <div className="mypage__container__nav__border" />
        </nav>
      </div>
      {editProfileForm === 0 && pwdChangeForm === 0 && <EditProfileForm />}
      {editProfileForm === 1 && <EditProfileForm />}
      {pwdChangeForm === 1 && <PwdChange />}
    </section>
  );
};

export default EditProfile;
