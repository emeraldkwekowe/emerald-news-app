import { memo } from "react";
import { ButtonContainer } from "./styles";

interface ButtonTypes {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: String;
  useLink?: boolean;
  onClick?: () => void;
}

function Button({ children, variant, className, onClick }: ButtonTypes) {
  return (
    //TODO: write this better
    //TODO: test this
    <ButtonContainer
      onClick={onClick}
      className={`animated fadeInUp ${variant || ""} ${className || ""}`}
    >
      {children}
    </ButtonContainer>
  );
}

export default memo(Button);
