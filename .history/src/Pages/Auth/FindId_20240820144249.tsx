import { useState } from 'react';
import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';
import Button from '../../components/Button';
// test

const FindId = () => {
  const [focusedBtn, setFocusedBtn] = useState('findId');

  const handleBtnClick = (buttonType: string) => {
    setFocusedBtn(buttonType);
  };

  return (
    <div className="findId">
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
          <div className="findId__wrapper__box_input">
            {focusedBtn === 'findId' && (
              <>
                <Input placeholder="이름" />
                <div className="findId__wrapper__box_input_inner">
                  <Input placeholder="연락처('-'을 제외한 숫자만 입력)" size="small" />
                  <Button type="button" state="disabled">
                    인증요쳥
                  </Button>
                </div>
              </>
            )}
            {focusedBtn === 'findPw' && (
              <>
                <Input placeholder="아이디 (한글/특수문자 제외)" />
                <Input placeholder="이름" />
                <div className="findId__wrapper__box_input_inner">
                  <Input placeholder="연락처('-'을 제외한 숫자만 입력)" size="small" />
                  <Button type="button" state="disabled">
                    인증요쳥
                  </Button>
                </div>
              </>
            )}
          </div>
          <AuthButton>아이디 찾기</AuthButton>
        </div>
      </div>
    </div>
  );
};

export default FindId;
