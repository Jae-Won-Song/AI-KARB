type IconWithTextProps = {
  icon: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const IconWithText = ({ icon, text, isActive, onClick }: IconWithTextProps) => {
  return (
    <div className="sidebar__container__nav-box__item" onClick={onClick}>
      <div
        className="sidebar__container__nav-box__item-bar"
        style={{
          visibility: isActive ? 'visible' : 'hidden',
        }}
      />
      <div
        className="sidebar__container__nav-box__item-area"
        style={{
          background: isActive ? 'white' : 'transparent',
          color: isActive ? '#006597' : 'white',
        }}>
        <img className="sidebar__container__nav-box__item-area__icon" src={icon} alt={text} />
        <span className="text-content">{text}</span>
      </div>
    </div>
  );
};

export default IconWithText;
