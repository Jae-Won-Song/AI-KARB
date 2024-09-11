import { ReactNode, useEffect, useState } from 'react';
import success from '../../assets/checked-mypage.svg';
import failed from '../../assets/warning-mypage.svg';
import closeBlue from '../../assets/closeBlue-mypage.svg';
import closeRed from '../../assets/closeRed-mypage.svg';

type ToastProps = {
  mode?: ReactNode | JSX.Element;
  title: string;
  content: string;
};

function successToast({ content, title }: ToastProps, onClose: () => void) {
  return (
    <div className="toast__success-container">
      <img src={success} alt="성공" />
      <div className="toast__success-container__success-box">
        <div className="toast__success-container__success-box_title">{title}</div>
        <div className="toast__success-container__success-box_content">{content}</div>
      </div>
      <div onClick={onClose}>
        <img className="close" src={closeBlue} alt="닫기버튼" />
      </div>
    </div>
  );
}

function failedToast({ content, title }: ToastProps, onClose: () => void) {
  return (
    <div className="toast__failed-container">
      <img src={failed} alt="실패" />
      <div className="toast__failed-container__failed-box">
        <div className="toast__failed-container__failed-box_title">{title}</div>
        <div className="toast__failed-container__failed-box_content">{content}</div>
      </div>
      <div onClick={onClose}>
        <img className="close" src={closeRed} alt="닫기버튼" />
      </div>
    </div>
  );
}

const Toast = ({ mode, content, title }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsShowing(false);
    setIsHiding(false);

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
  }, [mode, content, title]);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`toast ${isShowing ? 'show' : ''} ${isHiding ? 'hide' : ''}`}>
      {mode === 'red'
        ? failedToast({ mode, title, content }, handleClose)
        : successToast({ mode, title, content }, handleClose)}
    </div>
  );
};

export default Toast;
