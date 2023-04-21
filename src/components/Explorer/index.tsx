/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  BsChevronRight,
  BsChevronDown,
  BsFolder,
  BsFileEarmarkCode,
  BsTerminal,
  BsWrenchAdjustable,
} from "react-icons/bs";
import {
  ExplorerContainer,
  TitleContainer,
  ButtonContainer,
  SubContainer,
  SubContent,
} from "./styles";
import { useNavigate } from "react-router-dom";

type ExplorerProps = {
  setViewButton: any;
  setNameButton: any;
  setTextHeader: any;
};
export function Explorer({
  setViewButton,
  setNameButton,
  setTextHeader,
}: ExplorerProps) {
  const [openFalaDev, setOpenFalaDev] = useState(false);
  const [openEditors, setOpenEditors] = useState(false);
  const [openVsCode, setOpenVsCode] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);
  const navigate = useNavigate();

  function handleOpenFalaDev() {
    setOpenFalaDev(!openFalaDev);
  }

  function handleOpenEditors() {
    setOpenEditors(!openEditors);
  }
  function handleOpenVsCode() {
    setOpenVsCode(!openVsCode);
  }
  function handleOpenTerminal() {
    setOpenTerminal(!openTerminal);
  }

  return (
    <ExplorerContainer>
      <TitleContainer>
        <h5>EXPLORER</h5>
        ...
      </TitleContainer>
      <ButtonContainer>
        <button onClick={handleOpenEditors}>
          {openEditors ? <BsChevronDown /> : <BsChevronRight />}
          OPEN EDITORS
        </button>
        <button onClick={handleOpenFalaDev}>
          {openFalaDev ? <BsChevronDown /> : <BsChevronRight />}
          FALA DEV
        </button>
        {openFalaDev ? (
          <SubContainer>
            <button onClick={handleOpenVsCode}>
              {openVsCode ? <BsChevronDown /> : <BsChevronRight />}
              <BsFolder />
              Visual Studio Code
            </button>
            {openVsCode ? (
              <SubContent>
                <button
                  onClick={() => {
                    setTextHeader("settings.json — fala-dev");
                    setNameButton("settings.json");
                    navigate("/settings");
                    setViewButton(true);
                  }}
                >
                  <BsFileEarmarkCode />
                  settings.json
                </button>
                <button
                  onClick={() => {
                    setTextHeader("extensions.json — fala-dev");
                    setNameButton("extensions.json");
                    navigate("/extensions");
                    setViewButton(true);
                  }}
                >
                  <BsFileEarmarkCode />
                  extensions.json
                </button>
              </SubContent>
            ) : null}
            <button onClick={handleOpenTerminal}>
              {openTerminal ? <BsChevronDown /> : <BsChevronRight />}
              <BsFolder />
              Terminal
            </button>
            {openTerminal ? (
              <SubContent>
                <button>
                  <BsTerminal />
                  General
                </button>
                <button>
                  <BsWrenchAdjustable />
                  config.fish
                </button>
              </SubContent>
            ) : null}
          </SubContainer>
        ) : null}
      </ButtonContainer>
    </ExplorerContainer>
  );
}
