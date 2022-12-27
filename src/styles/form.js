import styled from 'styled-components'

export const ThemeInput = styled.input`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;
    height: 52px;

    background: var(--Black2);
    border: 1px solid var(--White);
    color: var(--White);
    &:focus, 
    &:active{
        outline: none;
        border-color: var(--Blue);
    }
    `

export const ThemeArea = styled.textarea`
    padding: 1rem;
    width: 100%;
    
    min-width: 100%;
    max-width: 100%;

    min-height: 140px;
    max-height: 200px;
    
    background: var(--Black2);
    border: 1px solid var(--White);
    color: var(--White);

    &:focus, 
    &:active{
        outline: none;
        border-color: var(--Blue);
    }
    &::-webkit-scrollbar{
        width: 12px;
        
    }
    &::-webkit-scrollbar-track {
    background: var(--Blue);
    }

    &::-webkit-scrollbar-thumb {
    background-color: white;    
    border-radius: 20px;
    border: 3px solid white;
   
    }
    `;

export const ThemeInputLabel = styled.label`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--White);
`;