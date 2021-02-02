import styled from "styled-components";

const StyledInput = styled.input`
    border:none;
    outline:none;
    min-width:12.5em;
    width:18.75rem;
    font-size:16px;
    font-family:${({theme})=> theme.fonts.raleway.name};
    font-weight:500;
`;

export default StyledInput;