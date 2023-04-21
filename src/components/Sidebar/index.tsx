import {
  Bug,
  Cog,
  Files,
  FlaskConical,
  GitFork,
  Monitor,
  Puzzle,
  User,
  Search,
} from "lucide-react";
import { SidebarContainer } from "./styles";

import { MenuButton } from "../MenuButton";
import { useState } from "react";
import { MyLinks } from "../MyLinks";
type SidebarProps = {
  handleViewExplorer: () => void;
};
export function Sidebar({ handleViewExplorer }: SidebarProps) {
  const [isActive, setIsActive] = useState(false);
  const [myLinks, setMylinks] = useState(false);

  function handleIsActive() {
    setIsActive(!isActive);
  }
  function handleMyLinks() {
    setMylinks(!myLinks);
  }
  return (
    <SidebarContainer>
      <div>
        <MenuButton
          icon={Files}
          isActive={isActive}
          onClick={() => {
            handleIsActive();
            handleViewExplorer();
          }}
        />
        <MenuButton icon={Search} />
        <MenuButton icon={GitFork} />
        <MenuButton icon={Bug} />
        <MenuButton icon={Puzzle} />
        <MenuButton icon={Monitor} />
        <MenuButton icon={FlaskConical} />
      </div>
      <div>
        {myLinks ? <MyLinks /> : null}
        <MenuButton icon={User} onClick={handleMyLinks} isActive={myLinks}/>
        <MenuButton icon={Cog} />
      </div>
    </SidebarContainer>
  );
}
