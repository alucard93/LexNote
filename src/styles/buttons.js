import styled, {css} from "styled-components"; 

export const ThemeButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    border-radius: 255px;
    font-size: 14px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    transition: .3s;
    ${props => {
        switch (props.buttonSize) {
            case 'lg':
                return css`
                    height: 58px;
                    padding: 0 3rem;
                `
        
            case 'sm':
                return css`
                    height: 31px;
                    padding: 0 2rem;
                    @media (min-width: 1024px){
                        padding: 0 2 rem;
                        height: 42px;
                    }
                `
        
            default:
                return false;
        }
    }}

    ${props => {
        switch (props.buttonStyle) {
            case 'solid':
                return css`
                    color var(--White); 
                    background: var(--Blue);
                    border: 1px solid var(--Blue);
                    &:hover{
                        filter: brightness(1.1)
                    }
                    `;

            case 'outline':
                return css`
                    color var(--White); 
                    background: transparent;
                    border: 1px solid var(--Blue);
                    &:hover{
                        background: var(--Blue);
                    }
                `;
        
            default:
                return false;
        }
    }}
`;


