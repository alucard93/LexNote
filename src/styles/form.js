import styled from 'styled-components'

export const ThemeInput = styled.input`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;
    height: 52px;

    background: var(--Gray);
    border: 1px solid var(--White);
    `

export const ThemeArea = styled.textarea`
    padding: 1rem;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 200px;
    max-height: 300px;
    background: var(--Gray);
    border: 1px solid var(--White);
    `;

export const ThemeInputLabel = styled.label`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--White);
`;