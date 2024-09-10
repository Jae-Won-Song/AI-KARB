import { useState } from 'react';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import errorIcon from '../../assets/icon-error.svg';
// utils
import {
  validateCertNo,
  validateEmpNo,
  validateId,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from '../../utils/inputValidationUtils';
// api
import {
  fetchCheckCertNoDuringSignUp,
  fetchCheckIdAvailable,
  fetchSendCertNoDuringSignUp,
} from '../../api/auth/authApi';

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
  // 타이머 시간 관리
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const handleTimeUp = () => {
    setIsTimeUp(true);
  };

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
  const [isCertNoSuccess, setIsCertNoSuccess] = useState(false);
  const [certNoSuccessMessage, setCertNoSuccessMessage] = useState('');
  // 아이디
  const [isIdError, setIsIdError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState('');
  const [isIdSuccess, setIsIdSuccess] = useState(false);
  const [idSuccessMessage, setIdSuccessMessage] = useState('');
  // 비밀번호
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  // 비밀번호 재확인
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
  const [isConfirmPasswordSuccess, setIsConfirmPasswordSuccess] = useState(false);
  const [confirmPasswordSuccessMessage, setConfirmPasswordSuccessMessage] = useState('');
  // 사원번호
  const [isEmpNoError, setIsEmpNoError] = useState(false);
  const [empNoErrorMessage, setEmpNoErrorMessage] = useState('');

  // button state 관리
  const [isCertNoRequestBtnDisabled, setIsCertNoRequestBtnDisabled] = useState(true);
  const [isIdCheckBtnDisabled, setIsIdCheckBtnDisabled] = useState(true);

  // 아이디 중복확인을 했는지 확인
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [needToCheckId, setNeedToCheckId] = useState(false);

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

    // 아이디
    if (filledInput === 'id') {
      setId(value);
    }

    const updatedId = filledInput === 'id' ? value : id;

    if (updatedId !== '') {
      setIsIdCheckBtnDisabled(false);
    }
  };

  // 유효성 검사 & api 요청
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

      console.log('인증번호 전송 전');

      const payload = {
        type: 'SignUp',
        phoneNumber,
      };

      fetchSendCertNoDuringSignUp(payload)
        .then((response) => {
          console.log(payload);
          console.log(response);
          if (response.data.code === 3103) {
            console.log('인증번호 발송 요청 성공');
          }
        })
        .catch((error) => {
          console.log(payload);
          console.error('인증번호 발송 오류', error);
        });
    }

    if (isValid) {
      setAddCertNoInput(true);
    }
  };

  // 인증번호
  const handleClickCertNoCheckBtn = () => {
    if (isTimeUp) {
      setIsTimeUp(false);
    }

    if (validateCertNo(certNo)) {
      setIsCertNoError(true);
      setCertNoErrorMessage('유효한 인증번호가 아닙니다');
    } else {
      setIsCertNoError(false);
      console.log('인증번호:', certNo);

      console.log('api 요청 전');

      // 인증 api 요청
      const payload = {
        type: 'SignUp',
        phoneNumber,
        certNo,
      };

      fetchCheckCertNoDuringSignUp(payload)
        .then((response) => {
          console.log(payload);
          console.log(response);
          if (response.data.code === 3104) {
            console.log('인증번호 api 요청 됨');
            setIsCertNoSuccess(true);
            setCertNoSuccessMessage('인증되었습니다');
            setIsCertNoError(false);
            setCertNoErrorMessage('');
          }
        })
        .catch((error) => {
          console.log(payload);
          console.error('인증번호 확인 오류', error);
          setIsCertNoError(true);
          setCertNoErrorMessage('인증번호가 올바르지 않습니다');
          setIsCertNoSuccess(false);
          setCertNoSuccessMessage('');
        });

      console.log('api 요청 후');
    }
  };

  // 인증번호 요청 재전송
  const handleClickCertNoRetransmit = () => {
    const payload = {
      type: 'SignUp',
      phoneNumber,
    };

    console.log(payload);

    setIsTimeUp(false);
    setResetTimer((prev) => !prev);
    setIsCertNoError(false);
    setCertNoErrorMessage('');

    fetchSendCertNoDuringSignUp(payload)
      .then((response) => {
        if (response.data.code === 3103) {
          setIsTimeUp(false);
          setResetTimer((prev) => !prev);
          setIsCertNoError(false);
          setCertNoErrorMessage('');
        }
      })
      .catch((error) => {
        console.error('인증번호 발송 오류', error);
      });
  };

  // 아이디
  const handleClickIdCheckBtn = () => {
    if (validateId(id)) {
      setIsIdError(true);
      setIdErrorMessage('아이디는 4~12글자, 영 대/소문자/숫자만 입력해주세요');
      setIsIdSuccess(false);
      setIdSuccessMessage('');
    } else {
      setIsIdError(false);
      setIdErrorMessage('');

      console.log('중복확인 api 요청 전');

      const payload = {
        id,
      };

      console.log(payload);

      // 아이디 중복확인 요청
      fetchCheckIdAvailable(payload)
        .then((response) => {
          console.log(payload);
          console.log('중복확인 요청');
          if (response.data.code === 3102) {
            // 이전에 에러 떴던 메세지 삭제
            setIsIdError(false);
            setIdErrorMessage('');
            // 사용 가능 메세지 노출
            setIsIdSuccess(true);
            setIdSuccessMessage('사용 가능한 아이디입니다');
            // 아이디 중복확인 완료
            setIsIdChecked(true);
          }
        })
        .catch((error) => {
          console.log('중복 확인 에러', error);
          setIsIdError(true);
          setIdErrorMessage('이미 존재하는 아이디입니다. 다른 아이디를 입력하세요');
          setIsIdSuccess(false);
          setIdSuccessMessage('');
          setIsIdChecked(false);
        });
    }
  };

  // 비밀번호
  const checkPasswordValidation = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if ('key' in e && e.key !== 'Tab' && e.key !== 'Enter') {
      return;
    }

    const value = e.target;

    if (validatePassword(password)) {
      setIsPasswordError(true);
      setPasswordErrorMessage('비밀번호 형식이 맞지 않습니다');
    } else {
      setIsPasswordError(false);
      setPasswordErrorMessage('');
    }
  };

  // 비밀번호 재확인
  const checkConfirmPassword = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if ('key' in e && e.key !== 'Tab' && e.key !== 'Enter') {
      return;
    }

    const value = e.target;

    if (confirmPassword === password) {
      setIsConfirmPasswordSuccess(true);
      setConfirmPasswordSuccessMessage('비밀번호가 일치합니다');
      setIsConfirmPasswordError(false);
      setConfirmPasswordErrorMessage('');
    } else {
      setIsConfirmPasswordSuccess(false);
      setConfirmPasswordSuccessMessage('');
      setIsConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('비밀번호가 일치하지 않습니다');
    }
  };

  // 사원번호
  const checkEmpNoValidation = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if ('key' in e && e.key !== 'Tab' && e.key !== 'Enter') {
      return;
    }

    const value = e.target;

    if (validateEmpNo(empNo)) {
      setIsEmpNoError(true);
      setEmpNoErrorMessage('사원번호는 8글자 숫자만 입력해주세요');
    } else {
      setIsEmpNoError(false);
      setEmpNoErrorMessage('');
    }
  };

  // 회원가입
  // 모든 인풋에 값이 입력되었는지 검사
  const checkAllInputFilled = () => {
    const allInputs = [name, phoneNumber, certNo, id, password, confirmPassword, empNo, email];

    return allInputs.every((field) => field.trim() !== '');
  };

  const handleSubmitSignUp = () => {
    if (!isIdChecked) {
      setNeedToCheckId(true);
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
                  state={isCertNoRequestBtnDisabled ? 'disabled' : 'default_deepBlue'}
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
                  isSuccess={isCertNoSuccess}
                  successMessage={certNoSuccessMessage}
                  timer
                  onTimeUp={handleTimeUp}
                  resetTrigger={resetTimer}
                />
                <div className="signUp__wrapper__box_input_box_button">
                  <Button
                    type="button"
                    width="5.417vw"
                    height="4.815vh"
                    fontSize="0.781vw"
                    onClick={isTimeUp ? handleClickCertNoRetransmit : handleClickCertNoCheckBtn}>
                    {isTimeUp ? '재전송' : '확인'}
                  </Button>
                </div>
              </div>
            )}

            <div className="signUp__wrapper__box_input_box">
              <Input
                placeholder="아이디 (한글/특수문자 제외)"
                size="small"
                name="id"
                value={id}
                onChange={checkIfInputsFilled}
                isError={isIdError}
                errorMessage={idErrorMessage}
                isSuccess={isIdSuccess}
                successMessage={idSuccessMessage}
              />
              <div className="signUp__wrapper__box_input_box_button">
                <Button
                  type="button"
                  state={isIdCheckBtnDisabled ? 'disabled' : 'default_deepBlue'}
                  width="5.417vw"
                  height="4.815vh"
                  fontSize="0.781vw"
                  onClick={handleClickIdCheckBtn}>
                  중복확인
                </Button>
              </div>
            </div>
            <Input
              placeholder="비밀번호(영문자/숫자/특수문자 사용 가능, 8-16자)"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={checkPasswordValidation}
              onKeyDown={checkPasswordValidation}
              isError={isPasswordError}
              errorMessage={passwordErrorMessage}
            />
            <Input
              placeholder="비밀번호 재확인"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={checkConfirmPassword}
              onKeyDown={checkConfirmPassword}
              isError={isConfirmPasswordError}
              errorMessage={confirmPasswordErrorMessage}
              isSuccess={isConfirmPasswordSuccess}
              successMessage={confirmPasswordSuccessMessage}
            />
            <Input
              placeholder="사원번호"
              value={empNo}
              onChange={(e) => setEmpNo(e.target.value)}
              onBlur={checkEmpNoValidation}
              onKeyDown={checkEmpNoValidation}
              isError={isEmpNoError}
              errorMessage={empNoErrorMessage}
            />
            <Input placeholder="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          {needToCheckId && (
            <div className="idError">
              <img src={errorIcon} alt="에러 아이콘" />
              <span className="idError_message">아이디 중복확인을 해주세요</span>
            </div>
          )}

          <div className="signUp__wrapper__box_button">
            <Button
              type="button"
              state={checkAllInputFilled() ? 'default' : 'disabled'}
              width="20.833vw"
              height="5.926vh"
              fontSize="0.99vw"
              onClick={handleSubmitSignUp}>
              회원가입
            </Button>
          </div>
          <div className="signUp__wrapper__box_text">
            <span>이미 계정이 있으신가요? </span>
            <a href="/signin" className="link">
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
