type AdInfoTableProps = {
  title1: string;
  title2: string;
  content1: string;
  content2: string;
};

const AdInfoTable = ({ title1, title2, content1, content2 }: AdInfoTableProps) => {
  return (
    <div className="AdInfoTable">
      <div className="AdInfoTable_small">{title1}</div>
      <div className="AdInfoTable_large">{content1}</div>
      <div className="AdInfoTable_small">{title2}</div>
      <div className="AdInfoTable_large">{content2}</div>
    </div>
  );
};

export default AdInfoTable;
