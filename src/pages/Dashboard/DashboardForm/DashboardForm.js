import React from 'react'
import { ThemeArea, ThemeInput, ThemeInputLabel } from '../../../styles/form';
import {  ThemeParagraph, ThemeTitle } from "../../../styles/typography";

const DashboardForm = () => {
  return (
    <div>
            <ThemeTitle tag='h2' titleSize='title3'>Preencha os campos abaixo para adicionar</ThemeTitle>
            <ThemeParagraph>Preencha os campos abaixo para adicionar a nota</ThemeParagraph>
        <form>
            <ThemeInputLabel htmlFor='titulo'>Título</ThemeInputLabel>
            <ThemeInput name='titulo'></ThemeInput>
            <ThemeInputLabel htmlFor='mensagem'>Mensagem</ThemeInputLabel>
            <ThemeArea name='mensagem'></ThemeArea>
        </form>
    </div>
  )
}

export default DashboardForm