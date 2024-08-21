import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <div className="signIn__wrapper__box">
          <div className="signIn__wrapper__box_title">로그인</div>
          <div className="signIn__wrapper__box_input">
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" type="password" />
            <div className="signIn__wrapper__box_input_find">아이디 / 비밀번호 찾기</div>
          </div>
          <div className="signIn__wrapper__box_button">
            <AuthButton>로그인</AuthButton>
          </div>
          <div className="signIn__wrapper__box_text">
            <span>계정이 없으신가요? </span>
            <span className="link">회원가입 하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
