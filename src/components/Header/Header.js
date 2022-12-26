import React from "react";
import LexNote from "../../assets/LexNote.svg";
import { ThemeButton } from "../../styles/buttons";
import { StyledHeader } from "./style";
import { Container } from "../../styles/Global";

const Header = ({ setLogin }) => {
  return (
    <StyledHeader>
      <Container>
        <img src={LexNote} alt="lexnote logo" />
        <ThemeButton onClick={() => setLogin(false)} buttonSize="sm" buttonStyle="outline">
          Sair
        </ThemeButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
