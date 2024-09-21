import { useState } from 'react';

interface TagFilterProps {
  tag1: string;
  tag2: string;
  tag3: string;
  onClickTag?: (tag: string) => void;
}

const TagFilter = ({ tag1, tag2, tag3, onClickTag }: TagFilterProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const selectedTag = [tag1, tag2, tag3][index];
    if (onClickTag) {
      onClickTag(selectedTag);
    }
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
