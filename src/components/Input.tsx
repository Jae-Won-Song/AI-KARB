interface InputProps {
  placeholder: string;
  type?: string;
  size?: string;
}

const Input = ({ placeholder, type = 'text', size }: InputProps) => {
  return <input placeholder={placeholder} type={type} className={['Input', size].join(' ')} />;
};

export default Input;
