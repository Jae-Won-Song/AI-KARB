import React from 'react';
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
  name?: string;
  value?: string;
  timer?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  type = 'text',
  size,
  isError = false,
  isSuccess = false,
  errorMessage,
  successMessage,
  name,
  value,
  timer,
  onChange,
  onBlur,
  onKeyDown,
}: InputProps) => {
  return (
    <div className="InputWrapper">
      <div className="InputWrapper_input">
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          className={['Input', size, isError ? 'error' : '', isSuccess ? 'success' : '', timer ? 'timer' : ''].join(
            ' ',
          )}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
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
      {timer && (
        <div className="Input__timer">
          <span className="Input__timer_span">남은 시간</span>
          <span className="Input__timer_time">3:00</span>
        </div>
      )}
    </div>
  );
};

export default Input;
