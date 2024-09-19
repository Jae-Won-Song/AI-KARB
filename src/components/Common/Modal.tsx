import { useState } from 'react';
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

type DecisionTypeModalProps = {
  btnContentOne?: string;
  btnContentTwo?: string;
  selectedItem: number | null;
  onItemClick: (index: number) => void;
  onClickOne?: () => void;
  onClickTwo?: () => void;
};

function one({ btnContentOne, onClickOne }: ModalProps) {
  return (
    <Button type="button" state="default_gray" width="160px" height="48px" onClick={onClickOne}>
      {btnContentOne}
    </Button>
  );
}

function twoRed({ btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  return (
    <>
      <Button type="button" state="default_gray" width="160px" height="48px" onClick={onClickOne}>
        {btnContentOne}
      </Button>

      <Button type="button" state="danger" width="160px" height="48px" onClick={onClickTwo}>
        {btnContentTwo}
      </Button>
    </>
  );
}

function twoBlue({ btnContentOne, btnContentTwo, onClickOne, onClickTwo }: ModalProps) {
  return (
    <>
      <Button type="button" state="default_gray" width="160px" height="48px" onClick={onClickOne}>
        {btnContentOne}
      </Button>

      <Button type="button" state="default" width="160px" height="48px" onClick={onClickTwo}>
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
        <Button type="button" state="default_gray" width="102px" height="52px" onClick={onClickOne}>
          {btnContentOne}
        </Button>
        <div style={{ width: '12px' }} />
        <Button type="button" state="default" width="102px" height="52px" onClick={onClickTwo}>
          {btnContentTwo}
        </Button>
      </div>
    </div>
  );
}

function decisionTypeModal({
  btnContentOne,
  btnContentTwo,
  selectedItem,
  onItemClick,
  onClickOne,
  onClickTwo,
}: DecisionTypeModalProps) {
  return (
    <div className="decisionType">
      <div className="decisionType__title">심의 결정 구분을 선택해주세요</div>
      <div className="decisionType__type-box">
        <div className="decisionType__type-box__type">
          {['주의 및 경고', '광고 수정', '주의 경고 및 광고 수정'].map((item, index) => (
            <div
              key={index}
              className={`decisionType__type-box__type-item ${
                selectedItem === index ? 'decisionType__type-box__type-item-selected' : ''
              }`}
              onClick={() => onItemClick(index)}>
              {item}
            </div>
          ))}
        </div>
        <div className="decisionType__type-box__type">
          {['광고 중지', '관계기관 통보', '기각', '해당사항 없음'].map((item, index) => (
            <div
              key={index + 3}
              className={`decisionType__type-box__type-item ${
                selectedItem === index + 3 ? 'decisionType__type-box__type-item-selected' : ''
              }`}
              onClick={() => onItemClick(index + 3)}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="decisionType__btn-box">
        <Button type="button" state="default_gray" width="160px" height="48px" onClick={onClickOne}>
          {btnContentOne}
        </Button>
        <div style={{ width: '12px' }} />
        <Button type="button" state="default" width="160px" height="48px" onClick={onClickTwo}>
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
        <Button type="button" state="default_gray" width="160px" height="48px" onClick={onClickOne}>
          {btnContentOne}
        </Button>
        <div style={{ width: '12px' }} />
        <Button type="button" state="danger" width="160px" height="48px" onClick={onClickTwo}>
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
  const [selectedItem, setSelectedIndex] = useState<number | null>(null);

  function modalChange({ btnContentOne, btnContentTwo, mode, onClickOne, onClickTwo }: ModalProps) {
    if (mode === 'distribution') {
      return distributionConfirm({ btnContentOne, btnContentTwo, onClickOne, onClickTwo });
    }
    if (mode === 'decisionType') {
      return decisionTypeModal({
        btnContentOne,
        btnContentTwo,
        selectedItem,
        onItemClick: setSelectedIndex,
        onClickOne,
        onClickTwo,
      });
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
