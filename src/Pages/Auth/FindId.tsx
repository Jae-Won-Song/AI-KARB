import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';

const FindId = () => {
  return (
    <div className="findId">
      <div className="findId__wrapper">
        <div className="findId__wrapper__box">
          <div className="findId__wrapper__box_title">
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
          </div>
          <div className="findId__wrapper__box_input">
            <Input placeholder="이름" />
            <div className="findId__wrapper__box_input_inner">
              <Input placeholder="연락처('-'을 제외한 숫자만 입력)" size="small" />
              <button>인증요청</button>
            </div>
          </div>
          <AuthButton>아이디 찾기</AuthButton>
        </div>
      </div>
    </div>
  );
};

export default FindId;
