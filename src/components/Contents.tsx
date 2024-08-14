import { ReactNode } from 'react';

type ContentsProps = {
  children: ReactNode;
};

const Contents = ({ children }: ContentsProps) => {
  return <div className="contents-container">{children}</div>;
};

export default Contents;
