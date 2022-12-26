import styled from "styled-components";

export const StyledHeader  = styled.header`
    width: 100%;
    border-bottom: 1px solid rgba(217, 217, 217, 0.5);
    & > div{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1 rem;
        gap: 2rem;
    }
`;