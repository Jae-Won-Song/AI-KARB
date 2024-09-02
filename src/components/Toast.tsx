import { ReactNode, useEffect, useState } from 'react';
import success from '../assets/checked-mypage.svg';
import failed from '../assets/warning-mypage.svg';
import closeBlue from '../assets/closeBlue-mypage.svg';
import closeRed from '../assets/closeRed-mypage.svg';

type ToastProps = {
  mode: ReactNode | JSX.Element;
};

function successToast(onClose: () => void) {
  return (
    <div className="toast__success-container">
      <img src={success} alt="성공" />
      <div className="toast__success-container__success-box">
        <div className="toast__success-container__success-box_title">개인정보 수정 완료</div>
        <div className="toast__success-container__success-box_content">개인정보 수정이 완료되었습니다.</div>
      </div>
      <div onClick={onClose}>
        <img className="close" src={closeBlue} alt="닫기버튼" />
      </div>
    </div>
  );
}

function failedToast(onClose: () => void) {
  return (
    <div className="toast__failed-container">
      <img src={failed} alt="실패" />
      <div className="toast__failed-container__failed-box">
        <div className="toast__failed-container__failed-box_title">개인정보 수정 실패</div>
        <div className="toast__failed-container__failed-box_content">개인정보 수정 중에 오류가 발생했습니다.</div>
      </div>
      <div onClick={onClose}>
        <img className="close" src={closeRed} alt="닫기버튼" />
      </div>
    </div>
  );
}

const Toast = ({ mode }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsShowing(true);
    }, 10);

    const hideTimer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => setIsVisible(false), 300);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`toast ${isShowing ? 'show' : ''} ${isHiding ? 'hide' : ''}`}>
      {mode === 'red' ? failedToast(handleClose) : successToast(handleClose)}
    </div>
  );
};

export default Toast;
