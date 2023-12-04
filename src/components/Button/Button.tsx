import { memo } from "react";
import { ButtonContainer } from "./styles";

interface ButtonTypes {
  children: React.ReactNode;
  variant?: "filled" | "outline" | "text";
  className?: String;
  useLink?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  disabled,
  children,
  variant,
  className,
  onClick,
  style,
}: ButtonTypes) {
  return (
    //TODO: write this better
    //TODO: test this
    <ButtonContainer
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={`animated fadeInUp ${variant || ""} ${className || ""}`}
    >
      {children}
    </ButtonContainer>
  );
}

export default memo(Button);
