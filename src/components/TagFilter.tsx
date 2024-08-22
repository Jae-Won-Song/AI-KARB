import { useState } from 'react';

const TagFilter = ({ tag1, tag2, tag3 }: { tag1: string; tag2: string; tag3: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="TagFilter">
      {[tag1, tag2, tag3].map((tag, index) => (
        <span
          key={index}
          className={`TagFilter__span ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagFilter;
