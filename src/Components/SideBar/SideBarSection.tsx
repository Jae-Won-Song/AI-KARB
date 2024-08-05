type SidebarSectionProps = {
  icon: string;
  iconSelected: string;
  title: string;
  section: string;
  openSection: string | null;
  toggleSection: (section: string) => void;
  items: { id: string; name: string }[];
  selectedTitle: string | null;
  selectedItem: string | null;
  handleItemClick: (itemId: string) => void;
};

const SidebarSection = ({
  icon,
  iconSelected,
  title,
  section,
  openSection,
  toggleSection,
  items,
  selectedTitle,
  selectedItem,
  handleItemClick,
}: SidebarSectionProps) => {
  return (
    <div>
      <div
        className={`sidebar-container__menu-title-box ${openSection === section ? 'active' : ''} ${selectedTitle === section ? 'selected' : ''}`}
        onClick={() => {
          toggleSection(section);
        }}
      >
        {openSection === section && <div className="sidebar-container__menu-title-box__slide-bar" />}
        <div className="sidebar-container__menu-title-box__title">
          <img
            src={selectedTitle === section ? iconSelected : icon}
            alt={title}
            className="sidebar-container__menu-title-box__icon"
          />
          <div className="sidebar-container__menu-title-box__title__content">{title}</div>
        </div>
      </div>
      {openSection === section &&
        items.map((item) => (
          <div
            key={item.id}
            className={`sidebar-container__item ${selectedItem === item.id ? 'selected' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="sidebar-container__item__content">· {item.name}</div>
          </div>
        ))}
    </div>
  );
};

export default SidebarSection;
