import Button from './Button';
import checkBox from '../../assets/checkbox-confirm-img.svg';
import danger from '../../assets/icon-danger-modal.svg';

type ModalProps = {
  title?: string;
  content?: string;
  add?: string;
  btnContentOne?: string;
  btnContentTwo?: string;
  mode?: string;
  onClickOne?: () => void;
  onClickTwo?: () => void;
};

function one({ btnContentOne, onClickOne }: ModalProps) {
  return (
    <Button type="button" state="default_gray" width="8.333vw" height="4.444vh" onClick={onClickOne}>
      {btnContentOne}
    </Button>
  );
}

function twoRed({ btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  return (
    <>
      <Button type="button" state="default_gray" width="8.333vw" height="4.444vh" onClick={onClickOne}>
        {btnContentOne}
      </Button>

      <Button type="button" state="danger" width="8.333vw" height="4.444vh" onClick={onClickTwo}>
        {btnContentTwo}
      </Button>
    </>
  );
}

function twoBlue({ btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  return (
    <>
      <Button type="button" state="default_gray" width="8.333vw" height="4.444vh" onClick={onClickOne}>
        {btnContentOne}
      </Button>

      <Button type="button" state="default" width="8.333vw" height="4.444vh" onClick={onClickTwo}>
        {btnContentTwo}
      </Button>
    </>
  );
}

function distributionConfirm({ btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  return (
    <div className="distributionConfirm">
      <img src={checkBox} alt="체크된 이미지" />
      <div className="distributionConfirm__content-box">배분 작업을 진행하시겠습니까?</div>
      <div className="distributionConfirm__task-count-box">
        <div className="distributionConfirm__task-count-box__item">
          <div className="distributionConfirm__task-count-box__item-title">작업 수</div>
          <div className="distributionConfirm__task-count-box__item-content">968건</div>
        </div>
        <div className="distributionConfirm__task-count-box__item">
          <div className="distributionConfirm__task-count-box__item-title">선택된 작업자 수</div>
          <div className="distributionConfirm__task-count-box__item-content">8명</div>
        </div>
        <div className="distributionConfirm__task-count-box__item">
          <div className="distributionConfirm__task-count-box__item-title">1인당 작업 수</div>
          <div className="distributionConfirm__task-count-box__item-content">약 121건</div>
        </div>
      </div>
      <div className="distributionConfirm__btn-box">
        <Button type="button" state="default_gray" width="5.313vw" height="4.815vh" onClick={onClickOne}>
          {btnContentOne}
        </Button>
        <div style={{ width: '12px' }} />
        <Button type="button" state="default" width="5.313vw" height="4.815vh" onClick={onClickTwo}>
          {btnContentTwo}
        </Button>
      </div>
    </div>
  );
}

function delUserInfo({ btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  return (
    <div className="delUserInfo">
      <img src={danger} alt="경고아이콘" />
      <div className="delUserInfo__title">회원 정보 삭제</div>
      <div className="delUserInfo__content">해당 사용자 정보는 삭제되며 복구되지 않습니다.</div>
      <div className="delUserInfo__content"> 해당 사용자를 삭제하시겠습니까?</div>
      <div className="delUserInfo__btn-box">
        <Button type="button" state="default_gray" width="8.333vw" height="4.444vh" onClick={onClickOne}>
          {btnContentOne}
        </Button>
        <div style={{ width: '0.625vw' }} />
        <Button type="button" state="danger" width="8.333vw" height="4.444vh" onClick={onClickTwo}>
          {btnContentTwo}
        </Button>
      </div>
    </div>
  );
}

function colorChange({ add, btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  if (add === '1') {
    return one({ btnContentOne, onClickOne });
  }
  if (add === 'blue') {
    return twoBlue({ btnContentOne, btnContentTwo, onClickOne, onClickTwo });
  }
  if (add === 'red') {
    return twoRed({ btnContentOne, btnContentTwo, onClickOne, onClickTwo });
  }
  return null;
}

const Modal = ({ title, content, add, btnContentTwo, btnContentOne, mode, onClickOne, onClickTwo }: ModalProps) => {
  function modalChange({ btnContentOne, btnContentTwo, mode, onClickOne, onClickTwo }: ModalProps) {
    if (mode === 'distribution') {
      return distributionConfirm({ btnContentOne, btnContentTwo, onClickOne, onClickTwo });
    }

    if (mode === 'delUserInfo') {
      return delUserInfo({ btnContentOne, btnContentTwo, onClickOne, onClickTwo });
    }

    if (mode === 'default') {
      return (
        <div className="modal">
          <div className="modal__container">
            <div className="modal__container__contentBox">
              <div className="modal__container__contentBox-title">{title}</div>
              <div className="modal__container__contentBox-content">{content}</div>
              <div className="modal__container__contentBox-btn-area">
                {colorChange({ add, btnContentOne, btnContentTwo, onClickOne, onClickTwo })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
  return <>{modalChange({ btnContentOne, btnContentTwo, mode, onClickOne, onClickTwo })}</>;
};

export default Modal;
