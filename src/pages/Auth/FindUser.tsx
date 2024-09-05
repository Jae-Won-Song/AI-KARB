import { useState } from 'react';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

const FindUser = () => {
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
          {focusedBtn === 'findId' && (
            <>
              <div className="findId__wrapper__box_input">
                <Input placeholder="이름" />
                <div className="findId__wrapper__box_input_inner">
                  <Input placeholder="연락처('-'을 제외한 숫자만 입력)" size="small" />
                  <Button type="button" state="disabled" width="5.417vw" height="4.815vh">
                    인증요청
                  </Button>
                </div>
              </div>
              <div className="findId__wrapper__box_button">
                <Button type="button" state="default" width="20.833vw" height="5.926vh">
                  아이디 찾기
                </Button>
              </div>
            </>
          )}
          {focusedBtn === 'findPw' && (
            <>
              <div className="findId__wrapper__box_input">
                <Input placeholder="아이디 (한글/특수문자 제외)" />
                <Input placeholder="이름" />
                <div className="findId__wrapper__box_input_inner">
                  <Input placeholder="연락처('-'을 제외한 숫자만 입력)" size="small" />
                  <Button type="button" state="disabled" width="5.417vw" height="4.815vh">
                    인증요청
                  </Button>
                </div>
              </div>
              <div className="findId__wrapper__box_button">
                <Button type="button" state="default" width="20.833vw" height="5.926vh">
                  확인
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindUser;
