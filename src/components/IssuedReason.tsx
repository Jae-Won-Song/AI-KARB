import { useState } from 'react';
import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';
import iconTrash from '../assets/icon-trash.svg';
import iconPencil from '../assets/icon-pencil.svg';

const IssuedReason = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`IssuedReason ${isOpen ? 'IssuedReason--open' : 'IssuedReason--close'}`}>
      <div className="IssuedReason__toggleBar">
        <div className="IssuedReason__toggleBar_title">
          <div className="IssuedReason__toggleBar_title_number">#1</div>
          <div className="IssuedReason__toggleBar_title_articleNum">제 11조</div>
          <div className="IssuedReason__toggleBar_title_articleTitle">주장의 무입증</div>
        </div>
        <div className="IssuedReason__toggleBar_icon" onClick={handleToggle}>
          <img src={isOpen ? arrowUp : arrowDown} alt="위화살표" />
        </div>
      </div>
      {isOpen && (
        <>
          <div className="IssuedReason__content--open">일품진로 어쩌구 저쩌구 이러쿵 저러쿵</div>
          <div className="IssuedReason__reviewComment">
            <div className="IssuedReason__reviewComment_title">검토 의견</div>
            <div className="IssuedReason__reviewComment_comment">없음</div>
          </div>
          <div className="IssuedReason__widthBar"> </div>
          <div className="IssuedReason__icons">
            <img className="IssuedReason__icons_trash" src={iconTrash} alt="쓰레기통" />
            <img className="IssuedReason__icons_pencil" src={iconPencil} alt="연필" />
          </div>
        </>
      )}
      {!isOpen && <div className="IssuedReason__content--close">일품진로 어쩌구 저쩌구...</div>}
    </div>
  );
};

export default IssuedReason;
