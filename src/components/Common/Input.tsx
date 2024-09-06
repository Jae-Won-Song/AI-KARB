import errorIcon from '../../assets/icon-error.svg';
import successIcon from '../../assets/icon-success.svg';

type InputProps = {
  placeholder: string;
  type?: string;
  size?: string;
  isError?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
  successMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  type = 'text',
  size,
  isError = false,
  isSuccess = false,
  errorMessage,
  successMessage,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="InputWrapper">
      <div className="InputWrapper_input">
        <input
          placeholder={placeholder}
          type={type}
          className={['Input', size, isError ? 'error' : '', isSuccess ? 'success' : ''].join(' ')}
          value={value}
          onChange={onChange}
        />
      </div>
      {isError && (
        <div className="Input__error">
          <img src={errorIcon} alt="에러 아이콘" />
          <span className="Input__error_message">{errorMessage}</span>
        </div>
      )}
      {isSuccess && (
        <div className="Input__success">
          <img src={successIcon} alt="성공 아이콘" />
          <span className="Input__success_message">{successMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
