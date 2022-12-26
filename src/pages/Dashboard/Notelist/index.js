import React from 'react'
import { ThemeTitle } from '../../../styles/typography'
import NoteCard from './NoteCard'
import { StyledNotelist } from './style'

const NoteList = () => {

    const notes = [
        {   
            id: 1,
            title: 'Título da anotação',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in delectus consectetur quos pariatur nisi id provident est rem dolore cupiditate nihil facilis dolorem tenetur fuga rerum atque, perspiciatis beatae',
        },
        {
            id: 2,
            title: 'Título da anotação',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in delectus consectetur quos pariatur nisi id provident est rem dolore cupiditate nihil facilis dolorem tenetur fuga rerum atque, perspiciatis beatae',
        },
        {
            id: 3,
            title: 'Título da anotação',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in delectus consectetur quos pariatur nisi id provident est rem dolore cupiditate nihil facilis dolorem tenetur fuga rerum atque, perspiciatis beatae',
        },
    ]

    return (
    <StyledNotelist>
        <ThemeTitle tag='h1' titleSize='title2'>Minhas anotações</ThemeTitle>
        <ul>
            {
                notes.map(note => 
                <NoteCard key={note.id} title={note.title} text={note.text} />
            )}
        </ul>
    </StyledNotelist>
  )
}

export default NoteList