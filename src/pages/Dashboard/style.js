import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    
    @media (min-width: 900px){
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        aside{
            width: 100%;
            max-width: 420px;
        }
    }
`;