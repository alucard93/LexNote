import React from "react";
import { ThemeButton } from "../../styles/buttons";
import { Container } from "../../styles/Global";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";
import LoginImage from "../../assets/VectorLogin.svg";
import { StyledLogin } from "./style";

const Login = () => {
    return (
      <StyledLogin>
        <Container>
          <div className="content">
            <div className="text">
              <ThemeLabel color="--Yellow"> Anote! </ThemeLabel>
              <ThemeTitle titleSize="title1" tag="h1">
                {" "}
                Anote suas tarefinhas para não esquecer!{" "}
              </ThemeTitle>
              <ThemeParagraph>
                Anote tudo e muito mais com LexNote!
              </ThemeParagraph>
            </div>

            <div className="button-grid">
              <ThemeButton buttonSize="lg" buttonStyle="solid">
                Entrar
              </ThemeButton>
            </div>
          </div>

          <div className="image-grid">
            <img src={LoginImage} alt="imagem login" />
          </div>
        </Container>
      </StyledLogin>
    );
};

export default Login;
