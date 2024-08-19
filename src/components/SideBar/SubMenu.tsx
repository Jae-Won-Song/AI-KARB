type SubMenuProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const SubMenu = ({ text, isActive, onClick }: SubMenuProps) => {
  return (
    <div
      className="sidebar__container__admin-nav__items"
      onClick={onClick}
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <span className="dot">·</span>
      <span
        className="sidebar__container__admin-nav__items__title"
        style={{
          textDecoration: isActive ? 'underline' : 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default SubMenu;
