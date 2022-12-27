import styled from "styled-components";

export const StyledNoteCard = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 420px;
    width: 100%;
    
    padding: 1.2rem 3.2rem 1.5rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0px 12px 12px 0px;
    border-left: 4px solid var(--Blue);

    .remove{
        position: absolute;
        top: 1.1rem;
        right: 1.5rem;
        opacity: .4;
        transition: .3s;
        &:hover{
            opacity: 1;
        }
    }

`;