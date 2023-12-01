import { memo } from "react";
import { ButtonContainer } from "./styles";

interface ButtonTypes {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: String;
}

function Button({ children, variant, className }: ButtonTypes) {
  return (
    //TODO: write this better
    //TODO: write test
    <ButtonContainer
      className={`animated fadeInUp ${variant || ""} ${className || ""}`}
    >
      {children}
    </ButtonContainer>
  );
}

export default memo(Button);
