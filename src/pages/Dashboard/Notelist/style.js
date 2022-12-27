import styled from "styled-components";


export const StyledNotelist = styled.div`
    gap: 1.5rem;
    max-height: 500px;
    overflow: auto;
    height: 100%;
    

    &::-webkit-scrollbar{
        width: 12px;
        padding-right: 1rem;
    }

    &::-webkit-scrollbar-track {
    background: var(--Blue);
    padding-right: 1rem;
    }

    &::-webkit-scrollbar-thumb {
    background-color: var(--White);    
    border-radius: 20px;
    padding-right: 1rem;
    border: 3px solid white;
    }
    ul{
        display: flex;
        max-width: 440px;
        width: 100%;
        flex-direction: column;
        gap: 1.5rem;
        padding-right: 32px;
       
    }
`;