import React from 'react'
import { ThemeButton } from '../../../styles/buttons';
import { ThemeArea, ThemeInput, ThemeInputLabel } from '../../../styles/form';
import {  ThemeParagraph, ThemeTitle } from "../../../styles/typography";
import { StyledDashboardForm } from './style';

const DashboardForm = () => {
  return (
    <StyledDashboardForm>

          <div className="content">
            <ThemeTitle tag='h2' titleSize='title3'>Insira uma anotação</ThemeTitle>
            <ThemeParagraph>Preencha os campos abaixo para adicionar a nota</ThemeParagraph>
          </div>

        <form>
            <ThemeInputLabel htmlFor='titulo'>Título</ThemeInputLabel>
            <ThemeInput name='titulo'/>

            <ThemeInputLabel htmlFor='mensagem'>Mensagem</ThemeInputLabel>
            <ThemeArea name='mensagem'/>

            <ThemeButton buttonSize='lg' buttonStyle='solid'>Enviar</ThemeButton>
        </form>
    </StyledDashboardForm>
  )
}

export default DashboardForm