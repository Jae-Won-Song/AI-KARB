type TabProps = {
  content: string;
  styleName?: 'default' | 'hover' | 'active';
  onClick?: () => void;
};

const Tab = ({ content, styleName = 'default', onClick }: TabProps) => {
  const className = `tab__container tab__container__${styleName}`;

  return (
    <div className="tab">
      <div className={className} onClick={onClick}>
        {content}
      </div>
    </div>
  );
};

export default Tab;
