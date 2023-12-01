import { ButtonContainer } from "./styles";

type ButtonTypes = {
  children: React.ReactNode;
  variant?: "filled" | "outline";
};

function Button({ children, variant }: ButtonTypes) {
  return <ButtonContainer className={variant}>{children}</ButtonContainer>;
}

export default Button;
