import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
// utils
import { validateCertNo, validateName, validatePhoneNumber } from '../../utils/inputValidationUtils';

const SignUp = () => {
  // input value 관리
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [empNo, setEmpNo] = useState('');
  const [email, setEmail] = useState('');
  const [certNo, setCertNo] = useState('');
  // 인증번호를 입력하는 input 추가
  const [addCertNoInput, setAddCertNoInput] = useState(false);

  // input state 관리
  // 이름
  const [isNameError, setIsNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  // 연락처
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [PhoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
  // 인증번호
  const [isCertNoError, setIsCertNoError] = useState(false);
  const [certNoErrorMessage, setCertNoErrorMessage] = useState('');

  // button state 관리
  const [isCertNoRequestBtnDisabled, setIsCertNoRequestBtnDisabled] = useState(true);

  // input이 채워졌는지 검사
  const checkIfInputsFilled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: filledInput, value } = e.target;

    // 이름, 연락처
    if (filledInput === 'name') {
      setName(value);
    }
    if (filledInput === 'phoneNumber') {
      setPhoneNumber(value);
    }

    const updatedName = filledInput === 'name' ? value : name;
    const updatedPhoneNumber = filledInput === 'phoneNumber' ? value : phoneNumber;

    if (updatedName !== '' && updatedPhoneNumber !== '') {
      setIsCertNoRequestBtnDisabled(false);
    } else {
      setIsCertNoRequestBtnDisabled(true);
    }

    // 인증번호
    if (filledInput === 'certNo') {
      setCertNo(value);
    }
  };

  // 유효성 검사
  // 이름, 연락처
  const handleClickCertNoRequestBtn = () => {
    let isValid = true;

    if (validateName(name)) {
      setIsNameError(true);
      setNameErrorMessage('이름은 2~4글자, 한글만 입력해주세요');
      isValid = false;
    } else {
      setIsNameError(false);
      console.log('이름 통과:', name);
    }

    if (validatePhoneNumber(phoneNumber)) {
      setIsPhoneNumberError(true);
      setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요');
      isValid = false;
    } else {
      setIsPhoneNumberError(false);
      console.log('연락처 통과:', phoneNumber);
    }

    if (isValid) {
      setAddCertNoInput(true);
    }
  };

  // 인증번호
  const handleClickCertNoCheckBtn = () => {
    if (validateCertNo(certNo)) {
      setIsCertNoError(true);
      setCertNoErrorMessage('유효한 인증번호가 아닙니다');
    } else {
      setIsCertNoError(false);
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <div className="signUp__wrapper__box">
          <div className="signUp__wrapper__box_title">회원가입</div>
          <div className="signUp__wrapper__box_input">
            <Input
              placeholder="이름"
              name="name"
              value={name}
              onChange={checkIfInputsFilled}
              isError={isNameError}
              errorMessage={nameErrorMessage}
            />
            <div className="signUp__wrapper__box_input_box">
              <Input
                placeholder="연락처 ('-'을 제외한 숫자만 입력)"
                size="small"
                name="phoneNumber"
                value={phoneNumber}
                onChange={checkIfInputsFilled}
                isError={isPhoneNumberError}
                errorMessage={PhoneNumberErrorMessage}
              />
              <div className="signUp__wrapper__box_input_box_button">
                <Button
                  type="button"
                  state={isCertNoRequestBtnDisabled ? 'disabled' : 'default'}
                  width="5.417vw"
                  height="4.815vh"
                  fontSize="0.781vw"
                  onClick={handleClickCertNoRequestBtn}>
                  인증요청
                </Button>
              </div>
            </div>

            {addCertNoInput && (
              <div className="signUp__wrapper__box_input_box">
                <Input
                  placeholder="인증번호"
                  size="small"
                  name="certNo"
                  value={certNo}
                  onChange={checkIfInputsFilled}
                  isError={isCertNoError}
                  errorMessage={certNoErrorMessage}
                />
                <div className="signUp__wrapper__box_input_box_button">
                  <Button
                    type="button"
                    width="5.417vw"
                    height="4.815vh"
                    fontSize="0.781vw"
                    onClick={handleClickCertNoCheckBtn}>
                    확인
                  </Button>
                </div>
              </div>
            )}

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
