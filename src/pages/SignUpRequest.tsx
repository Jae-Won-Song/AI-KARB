import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import Tab from '../components/Tab';
import check from '../assets/check-signup-request.svg';

const SignUpRequest = () => {
  return (
    <div className="sign-up-request">
      <div className="sign-up-request__container">
        <SearchBar>
          <Tab styleName="hover" content="반려" />
          <Tab styleName="active" content="승인" />
        </SearchBar>
        <Table
          columns={[
            { name: '번호', width: '6.25vw' },
            {
              name: '체크박스',
              img: (
                <img
                  style={{ display: 'flex', justifyContent: 'center', width: '17px', height: '17px' }}
                  src={check}
                  alt="체크박스"
                />
              ),
              width: '6.25vw',
            },
            { name: '이름', width: '8.333vw' },
            { name: '사원번호', width: '8.75vw' },
            { name: '연락처', width: '17.708vw' },
            { name: '이메일', width: '21.875vw' },
            { name: '가입요청일', width: '13.542vw' },
          ]}
          data={[
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
            {
              번호: 1,
              체크박스: <input className="checkBox" type="checkbox" />,
              이름: '홍길동',
              사원번호: '12345678',
              연락처: '010-3985-9374',
              이메일: 'yoon123@kakao.com',
              가입요청일: '2024-12-12 13:35',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SignUpRequest;
