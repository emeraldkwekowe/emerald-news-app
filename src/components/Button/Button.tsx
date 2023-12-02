import { memo } from "react";
import { ButtonContainer } from "./styles";

interface ButtonTypes {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: String;
  useLink?: boolean;
}

function Button({ children, variant, className, useLink }: ButtonTypes) {
  return (
    //TODO: write this better
    //TODO: test this
    <ButtonContainer
      className={`animated fadeInUp ${variant || ""} ${className || ""}`}
    >
      {children}
    </ButtonContainer>
  );
}

export default memo(Button);
