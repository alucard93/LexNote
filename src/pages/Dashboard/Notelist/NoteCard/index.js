import React from 'react'
import { ThemeParagraph, ThemeTitle } from '../../../../styles/typography'
import { MdDelete } from 'react-icons/md'
import { StyledNoteCard } from './style'

const NoteCard = ({ title, text }) => {
  return (
    <div>
        <StyledNoteCard>
            <button>
                <MdDelete size={21} color='var(--White)'/>
            </button>
            <ThemeTitle tag='h3' titleSize='title3'>Título da anotação</ThemeTitle>
            <ThemeParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas, aut molestias excepturi minus quis sit ratione at quod nam laudantium consequatur consectetur? Quas perspiciatis perferendis voluptas aspernatur nam atque.</ThemeParagraph>
        </StyledNoteCard>
    </div>
  )
}

export default NoteCard