import React from 'react'
import { ThemeTitle } from '../../../styles/typography'
import NoteCard from './NoteCard'
import { StyledNotelist } from './style'

const NoteList = ({ addNotes, removeNotes, notes }) => {

    return (
    <StyledNotelist>
        <ThemeTitle tag='h1' titleSize='title2'>Minhas anotações</ThemeTitle>
        <ul>
            {
                notes.map((note, index) => 
                <NoteCard 
                    key={index} 
                    notes={note}
                    addNotes={addNotes} 
                    removeNotes={removeNotes}
                    />
            )}
        </ul>
    </StyledNotelist>
  )
}

export default NoteList