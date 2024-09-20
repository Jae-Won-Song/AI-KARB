import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import errorIcon from '../../assets/icon-error.svg';
import successIcon from '../../assets/icon-successSignUp.svg';
// utils
import {
  validateCertNo,
  validateEmail,
  validateEmpNo,
  validateId,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from '../../utils/inputValidationUtils';
// api
import { fetchCheckCertNo, fetchCheckIdAvailable, fetchRequestSignUp, fetchSendCertNo } from '../../api/auth/authApi';
import bg from '../../assets/background.png';

const SignUp = () => {
  const navigate = useNavigate();

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
  // 이메일
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  // button state 관리
  const [isCertNoRequestBtnDisabled, setIsCertNoRequestBtnDisabled] = useState(true);
  const [isIdCheckBtnDisabled, setIsIdCheckBtnDisabled] = useState(true);
  const [isCertNoCheckBtnDisabled, setIsCertNoCheckBtnDisabled] = useState(false);
  const [isCertNoRequested, setIsCertNoRequested] = useState(false);

  // 아이디 중복확인을 했는지 확인
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [needToCheckId, setNeedToCheckId] = useState(false);

  // 회원가입 성공 여부
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  // 회원가입 요청 때 필요한 api response에서 받아온 정보
  const [certNoCheckToken, setCertNoCheckToken] = useState('');
  const [idCheckToken, setIdCheckToken] = useState('');

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
    }

    if (validatePhoneNumber(phoneNumber)) {
      setIsPhoneNumberError(true);
      setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요');
      isValid = false;
    } else {
      setIsPhoneNumberError(false);

      const payload = {
        type: 'SignUp',
        phoneNumber,
      };

      fetchSendCertNo(payload)
        .then((response) => {
          if (response.data.code === 3103) {
            console.log('인증번호 발송 요청 성공');
            setIsCertNoRequested(true);
          }
          if (isValid) {
            setAddCertNoInput(true);
          }
        })
        .catch((error) => {
          console.error('인증번호 발송 오류', error);
          if (error.response.data.code === 3153) {
            setIsPhoneNumberError(true);
            setPhoneNumberErrorMessage('회원정보가 존재합니다');
            isValid = false;
          }
          if (isValid) {
            setAddCertNoInput(false);
          }
        });
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

      // 인증 api 요청
      const payload = {
        type: 'SignUp',
        phoneNumber,
        certNo,
      };

      fetchCheckCertNo(payload)
        .then((response) => {
          if (response.data.code === 3104) {
            setIsCertNoSuccess(true);
            setCertNoSuccessMessage('인증되었습니다');
            setIsCertNoError(false);
            setCertNoErrorMessage('');
            setIsCertNoCheckBtnDisabled(true);
            // 토큰 저장
            setCertNoCheckToken(response.data.data.certNoCheckToken);
          }
        })
        .catch((error) => {
          setIsCertNoError(true);
          setCertNoErrorMessage('인증번호가 올바르지 않습니다');
          setIsCertNoSuccess(false);
          setCertNoSuccessMessage('');
        });
    }
  };

  // 인증번호 요청 재전송
  const handleClickCertNoRetransmit = () => {
    const payload = {
      type: 'SignUp',
      phoneNumber,
    };

    setIsTimeUp(false);
    setResetTimer((prev) => !prev);
    setIsCertNoError(false);
    setCertNoErrorMessage('');

    fetchSendCertNo(payload)
      .then((response) => {
        if (response.data.code === 3103) {
          setIsTimeUp(false);
          setResetTimer((prev) => !prev);
          setIsCertNoError(false);
          setCertNoErrorMessage('');
          setIsCertNoCheckBtnDisabled(true);
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

      const payload = {
        id,
      };

      // 아이디 중복확인 요청
      fetchCheckIdAvailable(payload)
        .then((response) => {
          if (response.data.code === 3102) {
            // 이전에 에러 떴던 메세지 삭제
            setIsIdError(false);
            setIdErrorMessage('');
            // 사용 가능 메세지 노출
            setIsIdSuccess(true);
            setIdSuccessMessage('사용 가능한 아이디입니다');
            // 아이디 중복확인 완료
            setIsIdChecked(true);
            // 토큰 저장
            setIdCheckToken(response.data.data.idCheckToken);
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

  // 이메일
  const checkEmailValidation = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if ('key' in e && e.key !== 'Tab' && e.key !== 'Enter') {
      return;
    }

    const value = e.target;

    if (validateEmail(email)) {
      setIsEmailError(true);
      setEmailErrorMessage('이메일 주소가 올바르지 않습니다. 이메일 주소를 정확하게 입력해주세요.');
    } else {
      setIsEmailError(false);
      setEmailErrorMessage('');
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
      return;
    }

    const payload = {
      name,
      phoneNumber,
      id,
      password,
      empNo,
      email,
      idCheckToken,
      certNoCheckToken,
    };

    console.log(payload);

    fetchRequestSignUp(payload)
      .then((response) => {
        if (response.data.code === 3101) {
          setIsSignUpSuccess(true);
        }
      })
      .catch((error) => {
        console.error('회원가입 실패', error);
      });
  };

  return (
    <div className="signUp">
      <img className="signIn_bg" src={bg} alt="배경이미지" />
      <div className="signUp__wrapper">
        {!isSignUpSuccess && (
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
                    onClick={isCertNoRequested ? handleClickCertNoRetransmit : handleClickCertNoRequestBtn}>
                    {isCertNoRequested ? '재전송' : '인증요청'}
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
                      state={isCertNoCheckBtnDisabled ? 'disabled' : 'default'}
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
              <Input
                placeholder="이메일"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={checkEmailValidation}
                onKeyDown={checkEmailValidation}
                isError={isEmailError}
                errorMessage={emailErrorMessage}
              />
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
        )}
        {isSignUpSuccess && (
          <div className="signUp__wrapper__success">
            <div className="signUp__wrapper__success_icon">
              <img src={successIcon} alt="파란색 체크표시 아이콘" />
            </div>
            <div className="signUp__wrapper__success_contents">
              <div className="signUp__wrapper__success_contents_big">회원가입 신청이 완료되었습니다</div>
              <div className="signUp__wrapper__success_contents_small">
                회원가입정보 검토 후, 승인완료 내용이 이메일로 전달될 예정입니다
              </div>
            </div>
            <div className="signUp__wrapper__success_button">
              <Button
                type="button"
                state="default"
                width="20.833vw"
                height="5.926vh"
                onClick={() => navigate('/signin')}>
                로그인하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
