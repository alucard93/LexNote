import React from 'react'
import { ThemeButton } from '../../../styles/buttons';
import { ThemeArea, ThemeInput, ThemeInputLabel } from '../../../styles/form';
import {  ThemeParagraph, ThemeTitle } from "../../../styles/typography";
import { StyledDashboardForm } from './style';

const DashboardForm = ({addNotes, title, setTitle, text, setText }) => {
  return (
    <StyledDashboardForm>

          <div className="content">
            <ThemeTitle tag='h2' titleSize='title3'>Insira uma anotação</ThemeTitle>
            <ThemeParagraph>Preencha os campos abaixo para adicionar a nota</ThemeParagraph>
          </div>

        <form onSubmit={addNotes}>
          
            <ThemeInputLabel htmlFor='title'>Título</ThemeInputLabel>
            <ThemeInput 
              name='title'
              type='text'
              value={title}
              maxLength={28}              
              onChange={e => setTitle(e.target.value )}
              />

            <ThemeInputLabel htmlFor='text'>Mensagem</ThemeInputLabel>
            <ThemeArea 
              name='text'
              type='text'
              value={text}
              maxLength={800}               
              onChange={e => setText(e.target.value)}
            />

            <ThemeButton buttonSize='lg' buttonStyle='solid'>Enviar</ThemeButton>
        </form>
    </StyledDashboardForm>
  )
}

export default DashboardForm