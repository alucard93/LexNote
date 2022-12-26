import React from "react";
import LexNote from "../../assets/LexNote.svg";
import { ThemeButton } from "../../styles/buttons";
import { StyledHeader } from "./style";
import { Container } from "../../styles/Global";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={LexNote} alt="lexnote logo" />
        <ThemeButton buttonSize="sm" buttonStyle="outline">
          Sair
        </ThemeButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
