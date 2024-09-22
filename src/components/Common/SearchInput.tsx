import { useState } from 'react';
import searchIconGray from '../../assets/icon-search-g.svg';
import searchIconBlack from '../../assets/icon-search-b.svg';

type SearchInputProps = {
  placeholder: string;
  size?: string;
  onChange: (value: string) => void;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

const SearchInput = ({ placeholder, size, onChange, onClick }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const searchIcon = isFocused || size === 'small' || inputValue ? searchIconBlack : searchIconGray;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="SearchInput">
      <input
        className={['SearchInput_input', size].join(' ')}
        placeholder={placeholder}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div onClick={onClick}>
        <img className="SearchInput_img" src={searchIcon} alt="검색 아이콘" />
      </div>
    </div>
  );
};

export default SearchInput;
