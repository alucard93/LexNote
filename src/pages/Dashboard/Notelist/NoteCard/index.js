import React from 'react'
import { ThemeParagraph, ThemeTitle } from '../../../../styles/typography'
import { MdDelete } from 'react-icons/md'
import { StyledNoteCard } from './style'

const NoteCard = ({ removeNotes, notes }) => {
  return (
    <div>
        <StyledNoteCard>
            <button 
              className='remove' 
              aria-label='remove'
              onClick={() => removeNotes(notes)}
              >
                <MdDelete size={21} color='var(--White)'/>
            </button>
            <ThemeTitle tag='h3' titleSize='title3' >{notes.title}</ThemeTitle>
            <div className="content">
              <ThemeParagraph opacity='.9'>{notes.text}</ThemeParagraph>
            </div>
        </StyledNoteCard>
    </div>
  )
}

export default NoteCard