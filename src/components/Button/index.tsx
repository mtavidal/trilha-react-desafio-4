import { ButtonContainer, ButtonContainerDisabled } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer hidden={disabled} disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export const ButtonDisabled = ({ title, disabled }: IButtonProps) => {
  return <ButtonContainerDisabled hidden={!disabled} disabled={true} >{title}</ButtonContainerDisabled>;
};


export default Button;