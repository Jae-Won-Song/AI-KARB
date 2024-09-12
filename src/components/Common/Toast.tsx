import { ReactNode, useEffect, useState } from 'react';
import success from '../../assets/checked-mypage.svg';
import failed from '../../assets/warning-mypage.svg';
import closeBlue from '../../assets/closeBlue-mypage.svg';
import closeRed from '../../assets/closeRed-mypage.svg';

export type ToastProps = {
  mode?: ReactNode | JSX.Element;
  title: string;
  content: string;
  onClose?: () => void;
};

function successToast({ content, title, onClose }: ToastProps) {
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

function failedToast({ content, title, onClose }: ToastProps) {
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

const Toast = ({ mode, content, title, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, 300);
    }, 3000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [onClose]);

  if (!isVisible && !isHiding) return null;

  return (
    <div className={`toast ${isHiding ? 'hide' : 'show'}`}>
      {mode === 'red'
        ? failedToast({ mode, title, content, onClose })
        : successToast({ mode, title, content, onClose })}
    </div>
  );
};

export default Toast;
