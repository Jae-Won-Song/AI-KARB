import { useState } from 'react';
import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';
import iconTrash from '../assets/icon-trash.svg';
import iconPencil from '../assets/icon-pencil.svg';

type IssuedReasonProps = {
  contentNumber: number;
  articleNumber: number;
  articleTitle: string;
  articleContent: string;
  issuedReason: string;
};

const IssuedReason = ({
  contentNumber,
  articleNumber,
  articleTitle,
  articleContent,
  issuedReason,
}: IssuedReasonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const getShortArticleContent = (content: string) => {
    if (content.length > 55) {
      return `${content.substring(0, 55)}...`;
    }
    return content;
  };

  return (
    <div className={`IssuedReason ${isOpen ? 'IssuedReason--open' : 'IssuedReason--close'}`}>
      <div className="IssuedReason__toggleBar">
        <div className="IssuedReason__toggleBar_title">
          <div className="IssuedReason__toggleBar_title_number">{`#${contentNumber}`}</div>
          <div className="IssuedReason__toggleBar_title_articleNum">{`제 ${articleNumber}조`}</div>
          <div className="IssuedReason__toggleBar_title_articleTitle">{articleTitle}</div>
        </div>
        <div className="IssuedReason__toggleBar_icon" onClick={handleToggle}>
          <img src={isOpen ? arrowUp : arrowDown} alt="위화살표" />
        </div>
      </div>
      {isOpen && (
        <>
          <div className="IssuedReason__content--open">{articleContent}</div>
          <div className="IssuedReason__reviewComment">
            <div className="IssuedReason__reviewComment_title">검토 의견</div>
            <div className="IssuedReason__reviewComment_comment">{issuedReason}</div>
          </div>
          <div className="IssuedReason__widthBar"> </div>
          <div className="IssuedReason__icons">
            <img className="IssuedReason__icons_trash" src={iconTrash} alt="쓰레기통" />
            <img className="IssuedReason__icons_pencil" src={iconPencil} alt="연필" />
          </div>
        </>
      )}
      {!isOpen && <div className="IssuedReason__content--close">{getShortArticleContent(articleContent)}</div>}
    </div>
  );
};

export default IssuedReason;
