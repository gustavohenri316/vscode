import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BsFileEarmarkCode, BsX } from "react-icons/bs";
import { Explorer } from "../components/Explorer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Container, Content, ContetPage, Nav, Button } from "./styles";

export function LayoutDefault() {
  const navigate = useNavigate();
  const [viewButton, setViewButton] = useState(false);
  const [viewExplorer, setViewExplore] = useState(false);
  const [nameButton, setNameButton] = useState(false);
  const [textHeader, setTextHeader] = useState("Fala Dev");

  function handleViewButton() {
    setViewButton(!viewButton);
  }
  function handleViewExplorer() {
    setViewExplore(!viewExplorer);
  }
  return (
    <Container>
      <Content>
        <Header textHeader={textHeader} />
        <ContetPage>
          <Sidebar handleViewExplorer={handleViewExplorer} />
          {viewExplorer ? (
            <Explorer
              setTextHeader={setTextHeader}
              setViewButton={setViewButton}
              setNameButton={setNameButton}
            />
          ) : null}
          <Nav>
            {viewButton ? (
              <Button>
                <div>
                  <BsFileEarmarkCode />
                  {nameButton}
                </div>
                <BsX
                  size={20}
                  onClick={() => {
                    navigate("/");
                    handleViewButton();
                  }}
                />
              </Button>
            ) : null}
            <Outlet />
          </Nav>
        </ContetPage>
        <Footer />
      </Content>
    </Container>
  );
}
