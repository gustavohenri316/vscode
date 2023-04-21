import { HomeContainer } from "./styles";
import vscode from "../../assets/vscode.svg";

export function Home() {
  return (
    <HomeContainer>
      <img src={vscode} width={150} />
    </HomeContainer>
  );
}
