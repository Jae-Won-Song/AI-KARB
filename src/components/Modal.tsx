import Button from './Button';
import { useState } from 'react';

interface ModalProps {
  state: string;
}

const Modal = () => {
  const [addBtn, setAddBtn] = useState(0);
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__container__contentBox">
          <div className="modal__container__contentBox-title">Alert Message</div>
          <div className="modal__container__contentBox-content">Alert Message</div>
          <div className="modal__container__contentBox-btn-area">
            <Button type="button" state="default_gray" width="160px" height="48px">
              확인
            </Button>
            {addBtn === 1 && (
              <Button type="button" state="default_gray" width="160px" height="48px">
                확인
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
