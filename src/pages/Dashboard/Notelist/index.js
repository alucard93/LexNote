import React from 'react'
import { ThemeTitle } from '../../../styles/typography'
import NoteCard from './NoteCard'

const NoteList = () => {

    const notes = [
        {
            title: 'Título da anotação',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in delectus consectetur quos pariatur nisi id provident est rem dolore cupiditate nihil facilis dolorem tenetur fuga rerum atque, perspiciatis beatae',
        },
        {
            title: 'Título da anotação',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in delectus consectetur quos pariatur nisi id provident est rem dolore cupiditate nihil facilis dolorem tenetur fuga rerum atque, perspiciatis beatae',
        },
        {
            title: 'Título da anotação',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in delectus consectetur quos pariatur nisi id provident est rem dolore cupiditate nihil facilis dolorem tenetur fuga rerum atque, perspiciatis beatae',
        },
    ]

    return (
    <div>
        <ThemeTitle tag='h1' titleSize='title2'>Minhas anotações</ThemeTitle>
        <ul>
            {
                notes.map((note, index) => 
                <NoteCard key={index} title={note.title} text={note.text} />
            )}
        </ul>
    </div>
  )
}

export default NoteList