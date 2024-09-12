import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import errorIcon from '../../assets/icon-error.svg';
import { fetchSignIn } from '../../api/auth/authApi';

const SignIn = () => {
  // input value 관리
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // input state 관리
  // 아이디
  const [isIdError, setIsIdError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState('');
  // 비밀번호
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  // 일치하는 계정이 없을 경우
  const [isExistAccount, setIsExistAccount] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // 아이디 검사
    if (id === '') {
      setIsIdError(true);
      setIdErrorMessage('아이디를 입력해주세요');
    } else {
      setIsIdError(false);
      setIdErrorMessage('');
    }

    // 비밀번호 검사
    if (password === '') {
      setIsPasswordError(true);
      setPasswordErrorMessage('비밀번호를 입력해주세요');
    } else {
      setIsPasswordError(false);
      setPasswordErrorMessage('');
    }

    // api 요청
    const payload = {
      id,
      password,
    };

    fetchSignIn(payload)
      .then((response) => {
        if (response.data.code === 3105) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
        if (id !== '' && password !== '') {
          setIsExistAccount(false);
        }
      });
  };

  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <div className="signIn__wrapper__box">
          <div className="signIn__wrapper__box_title">로그인</div>
          <div className="signIn__wrapper__box_input">
            <Input
              placeholder="아이디"
              value={id}
              isError={isIdError}
              errorMessage={idErrorMessage}
              onChange={(e) => setId(e.target.value)}
            />
            <Input
              placeholder="비밀번호"
              type="password"
              value={password}
              isError={isPasswordError}
              errorMessage={passwordErrorMessage}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!isExistAccount && (
            <div className="idError">
              <img src={errorIcon} alt="에러 아이콘" />
              <span className="idError_message">아이디 또는 비밀번호를 잘못입력하셨습니다</span>
            </div>
          )}

          <div className="signIn__wrapper__box_find">
            <a href="/find-user" className="signIn__wrapper__box_find_span">
              아이디 / 비밀번호 찾기
            </a>
          </div>
          <div className="signIn__wrapper__box_button">
            <Button type="button" onClick={handleSubmit} width="20.833vw" height="5.926vh" fontSize="0.99vw">
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
