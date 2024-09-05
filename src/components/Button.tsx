import React from 'react';

type ButtonState = 'default' | 'disabled' | 'default_white' | 'default_gray' | 'danger';

type ButtonProps = {
  type: 'button';
  children: React.ReactNode;
  state?: ButtonState;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
};

const Button = ({ type = 'button', children, state = 'default', onClick, width, height, fontSize }: ButtonProps) => {
  const className = [
    'Button',
    state === 'default'
      ? 'Button__default'
      : state === 'disabled'
        ? 'Button__disabled'
        : state === 'default_white'
          ? 'Button__defaultWhite'
          : state === 'default_gray'
            ? 'Button__defaultGray'
            : state === 'danger'
              ? 'Button__danger'
              : '',
  ].join(' ');

  const style = {
    width,
    height,
    fontSize,
  };

  return (
    <button type={type} className={className} onClick={onClick} style={style} disabled={state === 'disabled'}>
      {children}
    </button>
  );
};

export default Button;
