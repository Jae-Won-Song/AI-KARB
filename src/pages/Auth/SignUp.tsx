import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
// utils
import { validatePhoneNumber } from '../../utils/inputValidationUtils';

const SignUp = () => {
  // input value 관리
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [empNo, setEmpNo] = useState('');
  const [email, setEmail] = useState('');

  // button state 관리
  const [isCertNoRequestBtnDisabled, setIsCertNoRequestBtnDisabled] = useState(true);

  // 유효성 검사
  const handlePhoneNUmberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPhoneNumber(value);

    if (validatePhoneNumber(value)) {
      setIsCertNoRequestBtnDisabled(true);
    } else {
      setIsCertNoRequestBtnDisabled(false);
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <div className="signUp__wrapper__box">
          <div className="signUp__wrapper__box_title">회원가입</div>
          <div className="signUp__wrapper__box_input">
            <Input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
            <div className="signUp__wrapper__box_input_box">
              <Input
                placeholder="연락처 ('-'을 제외한 숫자만 입력)"
                size="small"
                value={phoneNumber}
                onChange={handlePhoneNUmberChange}
              />
              <div className="signUp__wrapper__box_input_box_button">
                <Button
                  type="button"
                  state={isCertNoRequestBtnDisabled ? 'disabled' : 'default'}
                  width="5.417vw"
                  height="4.815vh"
                  fontSize="0.781vw">
                  인증요청
                </Button>
              </div>
            </div>
            <div className="signUp__wrapper__box_input_box">
              <Input
                placeholder="아이디 (한글/특수문자 제외)"
                size="small"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <div className="signUp__wrapper__box_input_box_button">
                <Button type="button" state="disabled" width="5.417vw" height="4.815vh" fontSize="0.781vw">
                  중복확인
                </Button>
              </div>
            </div>
            <Input
              placeholder="비밀번호(영문자/숫자/특수문자 사용 가능, 8-16자)"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="비밀번호 재확인"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Input placeholder="사원번호" value={empNo} onChange={(e) => setEmpNo(e.target.value)} />
            <Input placeholder="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="signUp__wrapper__box_button">
            <Button type="button" state="disabled" width="20.833vw" height="5.926vh" fontSize="0.99vw">
              회원가입
            </Button>
          </div>
          <div className="signUp__wrapper__box_text">
            <span>이미 계정이 있으신가요? </span>
            <span className="link">로그인하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
