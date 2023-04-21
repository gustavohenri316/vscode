import { Circle } from "phosphor-react";
import { ButtonContainer, HeaderContainer, Options } from "./styles";

type HeaderProps = {
  textHeader: string
}
export function Header({textHeader}: HeaderProps) {
  return (
    <HeaderContainer>
      <ButtonContainer>
        <Circle size={15} color="#ED6A5E" weight="fill" />
        <Circle size={15} color="#F4BF4F" weight="fill" />
        <Circle size={15} color="#61C554" weight="fill" />

        <Options>
          <span>File</span>
          <span>Edite</span>
          <span>Selection</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
          </Options>
      </ButtonContainer>
      <span>{textHeader}</span>
    </HeaderContainer>
  );
}
