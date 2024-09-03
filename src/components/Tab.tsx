type TabProps = {
  content: string;
  styleName?: 'default' | 'hover' | 'active';
};

const Tab = ({ content, styleName = 'default' }: TabProps) => {
  const className = `tab__container tab__container__${styleName}`;

  return (
    <div className="tab">
      <div className={className}>{content}</div>
    </div>
  );
};

export default Tab;
