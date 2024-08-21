interface authButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // 로직 짜면 선택(? 표시) 제거
  disabled?: boolean;
}

const AuthButton = ({ children, onClick, disabled }: authButtonProps) => {
  return (
    <button className="authButton" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default AuthButton;
