import styled from "styled-components";

const NavigationHolder = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    border-bottom: 2px solid rgba(115,230,255,0.5);
    svg {
        color: rgba(0,0,0,0.5); 
    }
    .MuiTextField-root {
        margin: 0 1rem;
    }
    .MuiInput-root {
        &::before {
            border-bottom: 1px solid rgba(153,153,153,1);
        }
    }
    .magazine-container {
        a, a:visited {
            color: rgba(153,153,153,1);
            text-decoration: none;
            font-weight: bold;
        }
    }
`

export default NavigationHolder;