import { useState } from 'react';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import Modal from '../../components/Common/Modal';
import {
  validateName,
  validatePhoneNumber,
  validateCertNo,
  validateId,
  validatePassword,
} from '../../utils/inputValidationUtils';
import { fetchCheckCertNo, fetchEditPw, fetchFindId, fetchFindPw, fetchSendCertNo } from '../../api/auth/authApi';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/background.png';

const FindUser = () => {
  const [focusedBtn, setFocusedBtn] = useState('findId');

  // input value 관리
  // 아이디 찾기
  const [findIdName, setFindIdName] = useState('');
  const [findIdPhoneNumber, setFindIdPhoneNumber] = useState('');
  const [findIdCertNo, setFindIdCertNo] = useState('');
  // 비밀번호 찾기
  const [findPwUserId, setFindPwUserId] = useState('');
  const [findPwName, setFindPwName] = useState('');
  const [findPwPhoneNumber, setFindPwPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [findPwCertNo, setFindPwCertNo] = useState('');

  // input state 관리
  // 아이디
  const [isIdError, setIsIdError] = useState(false);
  const [idErrorMessage, setIdErrorMessage] = useState('');
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
  // 비밀번호
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('');
  const [isConfirmNewPasswordError, setIsConfirmNewPasswordError] = useState(false);
  const [confirmNewPasswordErrorMessage, setConfirmNewPasswordErrorMessage] = useState('');

  const [isCertNoRequested, setIsCertNoRequested] = useState(false);

  // button state 관리
  // 아이디 찾기
  const [isFindIdCertNoRequestBtnDisabled, setIsFindIdCertNoRequestBtnDisabled] = useState(true);
  const [isFindIdCertNoCheckBtnDisabled, setIsFindIdCertNoCheckBtnDisabled] = useState(false);

  // 비밀번호 찾기
  const [isFindPwCertNoRequestBtnDisabled, setIsFindPwCertNoRequestBtnDisabled] = useState(true);
  const [isFindPwCertNoCheckBtnDisabled, setIsFindPwCertNoCheckBtnDisabled] = useState(false);

  const [isSuccessFindPw, setIsSuccessFindPw] = useState(false);

  // 인증번호를 입력하는 input 추가
  const [findIdAddCertNoInput, setFindIdAddCertNoInput] = useState(false);
  const [findPwAddCertNoInput, setFindPwAddCertNoInput] = useState(false);

  // 타이머 시간 관리
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const handleTimeUp = () => {
    setIsTimeUp(true);
  };

  // 모달창
  const [isIdSuccessModalOpen, setIsIdSuccessModalOpen] = useState(false);
  const [isIdFailModalOpen, setIsIdFailModalOpen] = useState(false);
  const [isPwSuccessModalOpen, setIsPwSuccessModalOpen] = useState(false);
  const [isPwFailModalOpen, setIsPwFailModalOpen] = useState(false);

  // 아이디, 비밀번호 찾기 요청 때 필요한 api response에서 받아온 정보
  const [certNoCheckToken, setCertNoCheckToken] = useState('');
  const [passwordResetToken, setPasswordResetToken] = useState('');
  const [foundId, setFoundId] = useState('');

  const handleBtnClick = (buttonType: string) => {
    setFocusedBtn(buttonType);
  };

  const navigate = useNavigate();

  // 아이디 찾기 인증요청 버튼 활성화
  const handleFindIdInputsFilled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: filledInput, value } = e.target;

    if (filledInput === 'name') {
      setFindIdName(value);
    }
    if (filledInput === 'phoneNumber') {
      setFindIdPhoneNumber(value);
    }
    if (filledInput === 'certNo') {
      setFindIdCertNo(value);
    }

    const updatedName = filledInput === 'name' ? value : findIdName;
    const updatedPhoneNumber = filledInput === 'phoneNumber' ? value : findIdPhoneNumber;

    if (focusedBtn === 'findId') {
      if (updatedName !== '' && updatedPhoneNumber !== '') {
        setIsFindIdCertNoRequestBtnDisabled(false);
      } else {
        setIsFindIdCertNoRequestBtnDisabled(true);
      }
    }
  };

  // 비밀번호 찾기 인증요청 버튼 활성화
  const handleFindPwInputsFilled = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: filledInput, value } = e.target;
    if (filledInput === 'id') {
      setFindPwUserId(value);
    }
    if (filledInput === 'name') {
      setFindPwName(value);
    }
    if (filledInput === 'phoneNumber') {
      setFindPwPhoneNumber(value);
    }
    if (filledInput === 'certNo') {
      setFindPwCertNo(value);
    }

    const updateId = filledInput === 'id' ? value : findPwUserId;
    const updatedName = filledInput === 'name' ? value : findPwName;
    const updatedPhoneNumber = filledInput === 'phoneNumber' ? value : findPwPhoneNumber;

    if (focusedBtn === 'findPw') {
      if (updateId !== '' && updatedName !== '' && updatedPhoneNumber !== '') {
        setIsFindPwCertNoRequestBtnDisabled(false);
      } else {
        setIsFindPwCertNoRequestBtnDisabled(true);
      }
    }
  };

  // 인증요청
  const handleClickCertNoRequestBtn = () => {
    let isValid = true;

    if (focusedBtn === 'findId') {
      if (validateName(findIdName)) {
        setIsNameError(true);
        setNameErrorMessage('이름은 2~4글자, 한글만 입력해주세요');
        isValid = false;
        return;
      }
      setIsNameError(false);
      setNameErrorMessage('');

      if (validatePhoneNumber(findIdPhoneNumber)) {
        setIsPhoneNumberError(true);
        setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요');
        isValid = false;
        return;
      }
      setIsPhoneNumberError(false);
      setPhoneNumberErrorMessage('');

      const payload = {
        type: 'FindId',
        phoneNumber: findIdPhoneNumber,
      };

      fetchSendCertNo(payload)
        .then((response) => {
          if (response.data.code === 3103) {
            setIsCertNoRequested(true);
            setFindIdAddCertNoInput(true);
          }
        })
        .catch((error) => {
          setFindIdAddCertNoInput(false);
          console.error('인증요청 실패', error);
        });
    }

    if (focusedBtn === 'findPw') {
      if (validateId(findPwUserId)) {
        setIsIdError(true);
        setIdErrorMessage('아이디는 4~12글자, 영 대/소문자/숫자만 입력해주세요');
        isValid = false;
        return;
      }
      setIsIdError(false);
      setIdErrorMessage('');

      if (validateName(findPwName)) {
        setIsNameError(true);
        setNameErrorMessage('이름은 2~4글자, 한글만 입력해주세요');
        isValid = false;
        return;
      }
      setIsNameError(false);
      setNameErrorMessage('');

      if (validatePhoneNumber(findPwPhoneNumber)) {
        setIsPhoneNumberError(true);
        setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요');
        isValid = false;
        return;
      }
      setIsPhoneNumberError(false);
      setPhoneNumberErrorMessage('');

      const payload = {
        type: 'FindPassword',
        phoneNumber: findPwPhoneNumber,
      };

      console.log('요청 전');

      fetchSendCertNo(payload)
        .then((response) => {
          console.log('요청 성공', response);
          if (response.data.code === 3103) {
            setIsCertNoRequested(true);
          }
          if (isValid) {
            setFindPwAddCertNoInput(true);
          }
        })
        .catch(() => {
          if (isValid) {
            setFindPwAddCertNoInput(false);
          }
        });
    }
  };

  // 인증번호
  const handleClickCertNoCheckBtn = () => {
    if (isTimeUp) {
      setIsTimeUp(false);
    }

    if (validateCertNo(findIdCertNo) || validateCertNo(findPwCertNo)) {
      setIsCertNoError(true);
      setCertNoErrorMessage('유효한 인증번호가 아닙니다');
    } else {
      setIsCertNoError(false);

      // 인증번호 확인 요청
      if (focusedBtn === 'findId') {
        const payload = {
          type: 'FindId',
          phoneNumber: findIdPhoneNumber,
          certNo: findIdCertNo,
        };

        fetchCheckCertNo(payload)
          .then((response) => {
            if (response.data.code === 3104) {
              setIsCertNoSuccess(true);
              setCertNoSuccessMessage('인증되었습니다');
              setIsCertNoError(false);
              setCertNoErrorMessage('');
              setIsFindIdCertNoCheckBtnDisabled(true);
              // 토큰 저장
              setCertNoCheckToken(response.data.data.certNoCheckToken);
            }
          })
          .catch(() => {
            setIsCertNoError(true);
            setCertNoErrorMessage('인증번호가 올바르지 않습니다');
            setIsCertNoSuccess(false);
            setCertNoSuccessMessage('');
          });
      }

      if (focusedBtn === 'findPw') {
        const payload = {
          type: 'FindPassword',
          phoneNumber: findPwPhoneNumber,
          certNo: findPwCertNo,
        };

        fetchCheckCertNo(payload)
          .then((response) => {
            if (response.data.code === 3104) {
              setIsCertNoSuccess(true);
              setCertNoSuccessMessage('인증되었습니다');
              setIsCertNoError(false);
              setCertNoErrorMessage('');
              setIsFindPwCertNoCheckBtnDisabled(true);
              // 토큰 저장
              setCertNoCheckToken(response.data.data.certNoCheckToken);
            }
          })
          .catch(() => {
            setIsCertNoError(true);
            setCertNoErrorMessage('인증번호가 올바르지 않습니다');
            setIsCertNoSuccess(false);
            setCertNoSuccessMessage('');
          });
      }
    }
  };

  const handleClickFindIdBtn = () => {
    if (!isCertNoRequested) {
      setIsNameError(true);
      setNameErrorMessage('이름은 2~4글자, 한글만 입력해주세요');
      setIsPhoneNumberError(true);
      setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요');
      return;
    }

    const payload = {
      name: findIdName,
      phoneNumber: findIdPhoneNumber,
      certNoCheckToken,
    };

    fetchFindId(payload)
      .then((response) => {
        if (response.data.code === 3106) {
          setFoundId(response.data.data.userId);
          setIsIdSuccessModalOpen(true);
        }
      })
      .catch((error) => {
        setIsIdFailModalOpen(true);
      });
  };

  const handleClickFindPwBtn = () => {
    if (!isCertNoRequested) {
      setIsNameError(true);
      setNameErrorMessage('이름은 2~4글자, 한글만 입력해주세요');
      setIsPhoneNumberError(true);
      setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요');
      return;
    }

    // if (validatePassword(newPassword)) {
    //   setIsNewPasswordError(true);
    //   setNewPasswordErrorMessage('비밀번호 형식이 맞지 않습니다');
    //   return;
    // }

    // if (confirmNewPassword !== newPassword) {
    //   setIsConfirmNewPasswordError(true);
    //   setConfirmNewPasswordErrorMessage('비밀번호가 일치하지 않습니다');
    //   return;
    // }

    if (isSuccessFindPw) {
      const payload = {
        password: newPassword,
        passwordResetToken,
      };

      fetchEditPw(payload)
        .then((response) => {
          console.log('수정 성공', response);
          setIsPwSuccessModalOpen(true);
        })
        .catch((error) => {
          console.error('비밀번호 수정 실패', error);
        });
    }

    if (!isSuccessFindPw) {
      const payload = {
        userId: findPwUserId,
        name: findPwName,
        phoneNumber: findPwPhoneNumber,
        certNoCheckToken,
      };

      fetchFindPw(payload)
        .then((response) => {
          setIsSuccessFindPw(true);
          setPasswordResetToken(response.data.data.passwordResetToken);
          console.log('요청 성공', response);
        })
        .catch((error) => {
          console.log('비밀번호 찾기 실패', error);
          setIsPwFailModalOpen(true);
        });
    }
  };

  return (
    <div className="findId">
      <img className="signIn_bg" src={bg} alt="배경이미지" />
      <div className="findId__wrapper">
        <div className="findId__wrapper__box">
          <div className="findId__wrapper__box_title">
            <button className={focusedBtn === 'findId' ? 'focused' : ''} onClick={() => handleBtnClick('findId')}>
              아이디 찾기
            </button>
            <button className={focusedBtn === 'findPw' ? 'focused' : ''} onClick={() => handleBtnClick('findPw')}>
              비밀번호 찾기
            </button>
          </div>

          {/* 아이디 찾기 */}
          {focusedBtn === 'findId' && (
            <>
              <div className="findId__wrapper__box_input">
                <Input
                  placeholder="이름"
                  name="name"
                  value={findIdName}
                  onChange={handleFindIdInputsFilled}
                  isError={isNameError}
                  errorMessage={nameErrorMessage}
                />
                <div className="findId__wrapper__box_input_inner">
                  <Input
                    placeholder="연락처('-'을 제외한 숫자만 입력)"
                    size="small"
                    name="phoneNumber"
                    value={findIdPhoneNumber}
                    onChange={handleFindIdInputsFilled}
                    isError={isPhoneNumberError}
                    errorMessage={PhoneNumberErrorMessage}
                  />
                  <Button
                    type="button"
                    state={isFindIdCertNoRequestBtnDisabled ? 'disabled' : 'default_deepBlue'}
                    width="5.417vw"
                    height="4.815vh"
                    fontSize="0.781vw"
                    onClick={handleClickCertNoRequestBtn}>
                    {isCertNoRequested ? '재전송' : '인증요청'}
                  </Button>
                </div>

                {findIdAddCertNoInput && (
                  <div className="signUp__wrapper__box_input_box">
                    <Input
                      placeholder="인증번호"
                      size="small"
                      name="certNo"
                      value={findIdCertNo}
                      onChange={handleFindIdInputsFilled}
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
                        state={isFindIdCertNoCheckBtnDisabled ? 'disabled' : 'default'}
                        width="5.417vw"
                        height="4.815vh"
                        fontSize="0.781vw"
                        onClick={handleClickCertNoCheckBtn}>
                        확인
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div className="findId__wrapper__box_button">
                <Button type="button" state="default" width="20.833vw" height="5.926vh" onClick={handleClickFindIdBtn}>
                  아이디 찾기
                </Button>
              </div>

              {isIdSuccessModalOpen && (
                <div className="FindUser__modal">
                  <Modal
                    mode="default"
                    add="blue"
                    title="아이디 찾기"
                    content={`회원님의 아이디는 [${foundId}] 입니다.`}
                    btnContentOne="비밀번호 찾기"
                    btnContentTwo="로그인하기"
                    onClickOne={() => {
                      setIsIdSuccessModalOpen(false);
                      setFocusedBtn('findPw');
                    }}
                    onClickTwo={() => {
                      navigate('/signin');
                    }}
                  />
                </div>
              )}

              {isIdFailModalOpen && (
                <div className="FindUser__modal">
                  <Modal
                    mode="default"
                    add="blue"
                    title="아이디 찾기"
                    content="입력하신 정보와 일치하는 아이디가 없습니다"
                    btnContentOne="취소"
                    btnContentTwo="회원가입하기"
                    onClickOne={() => {
                      setIsIdFailModalOpen(false);
                    }}
                    onClickTwo={() => {
                      navigate('/signup');
                    }}
                  />
                </div>
              )}
            </>
          )}

          {/* 비밀번호 찾기 */}
          {focusedBtn === 'findPw' && (
            <>
              <div className="findId__wrapper__box_input">
                <Input
                  placeholder="아이디 (한글/특수문자 제외)"
                  name="id"
                  value={findPwUserId}
                  onChange={handleFindPwInputsFilled}
                  isError={isIdError}
                  errorMessage={idErrorMessage}
                />
                <Input
                  placeholder="이름"
                  name="name"
                  value={findPwName}
                  onChange={handleFindPwInputsFilled}
                  isError={isNameError}
                  errorMessage={nameErrorMessage}
                />
                <div className="findId__wrapper__box_input_inner">
                  <Input
                    placeholder="연락처('-'을 제외한 숫자만 입력)"
                    size="small"
                    name="phoneNumber"
                    value={findPwPhoneNumber}
                    onChange={handleFindPwInputsFilled}
                    isError={isPhoneNumberError}
                    errorMessage={PhoneNumberErrorMessage}
                  />
                  <Button
                    type="button"
                    state={isFindPwCertNoRequestBtnDisabled ? 'disabled' : 'default_deepBlue'}
                    width="5.417vw"
                    height="4.815vh"
                    fontSize="0.781vw"
                    onClick={handleClickCertNoRequestBtn}>
                    {isCertNoRequested ? '재전송' : '인증요청'}
                  </Button>
                </div>

                {findPwAddCertNoInput && (
                  <div className="signUp__wrapper__box_input_box">
                    <Input
                      placeholder="인증번호"
                      size="small"
                      name="certNo"
                      value={findPwCertNo}
                      onChange={handleFindPwInputsFilled}
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
                        state={isFindPwCertNoCheckBtnDisabled ? 'disabled' : 'default'}
                        width="5.417vw"
                        height="4.815vh"
                        fontSize="0.781vw"
                        onClick={handleClickCertNoCheckBtn}>
                        확인
                      </Button>
                    </div>
                  </div>
                )}
                {isSuccessFindPw && (
                  <>
                    <Input
                      placeholder="새 비밀번호 (영문자/숫자/특수문자 사용 가능, 8~16자)"
                      type="password"
                      value={newPassword}
                      isError={isNewPasswordError}
                      errorMessage={newPasswordErrorMessage}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Input
                      placeholder="새 비밀번호 재확인"
                      type="password"
                      value={confirmNewPassword}
                      isError={isConfirmNewPasswordError}
                      errorMessage={confirmNewPasswordErrorMessage}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </>
                )}
              </div>

              <div className="findId__wrapper__box_button">
                <Button type="button" state="default" width="20.833vw" height="5.926vh" onClick={handleClickFindPwBtn}>
                  {isSuccessFindPw ? '수정하기' : '확인'}
                </Button>
              </div>

              {isPwSuccessModalOpen && (
                <div className="FindUser__modal">
                  <Modal
                    mode="default"
                    add="1"
                    title="비밀번호 변경"
                    content="비밀번호가 변경되었습니다"
                    btnContentOne="확인"
                    onClickOne={() => {
                      navigate('/signin');
                    }}
                  />
                </div>
              )}

              {isPwFailModalOpen && (
                <div className="FindUser__modal">
                  <Modal
                    mode="default"
                    add="blue"
                    title="비밀번호 찾기"
                    content="입력하신 정보와 일치하는 정보가 없습니다."
                    btnContentOne="취소"
                    btnContentTwo="회원가입하기"
                    onClickOne={() => {
                      setIsPwFailModalOpen(false);
                    }}
                    onClickTwo={() => {
                      navigate('/signup');
                    }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindUser;
