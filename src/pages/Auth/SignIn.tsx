import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';

const SignIn = () => {
  // input value 관리
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // input state 관리
  // 아이디
  const [isIdError, setIsIdError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState('');
  // 비밀번호
  const [idPasswordError, setIdPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  // 계정 유무 확인
  const [isExistAccount, setIsExistAccount] = useState(true);

  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <div className="signIn__wrapper__box">
          <div className="signIn__wrapper__box_title">로그인</div>
          <div className="signIn__wrapper__box_input">
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" type="password" />
          </div>
          <div className="signIn__wrapper__box_find">
            <a href="/find-user" className="signIn__wrapper__box_find_span">
              아이디 / 비밀번호 찾기
            </a>
          </div>
          <div className="signIn__wrapper__box_button">
            <Button type="button" onClick={() => alert('로그인버튼 클릭')} width="20.833vw" height="5.926vh">
              로그인
            </Button>
          </div>
          <div className="signIn__wrapper__box_text">
            <span>계정이 없으신가요? </span>
            <a href="/signup" className="link">
              회원가입 하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
