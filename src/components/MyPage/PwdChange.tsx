import Button from '../Button';
import Input from '../Input';

const PwdChange = () => {
  return (
    <form className="mypage__container__form">
      <div className="mypage__container__form__info">
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">현재 비밀번호</div>
          <div className="mypage__container__form__info-box-content">
            <Input placeholder="영문자/숫자/특수문자 사용 가능, 8~16자" />
          </div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">새 비밀번호</div>
          <div className="mypage__container__form__info-box-content">
            <Input placeholder="영문자/숫자/특수문자 사용 가능, 8~16자" />
          </div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">새 비밀번호 확인</div>
          <div className="mypage__container__form__info-box-content">
            <Input placeholder="영문자/숫자/특수문자 사용 가능, 8~16자" />
          </div>
        </div>
        <div className="mypage__container__form__btn">
          <Button type="button" state="default" width="91px" height="41px">
            수정하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PwdChange;
