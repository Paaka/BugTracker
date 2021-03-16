import styled from 'styled-components';

const StyledSelect = styled.select`
    width:100%;
    border:2px solid #ccc;
    border-radius:5px;
    padding:10px 5px;
    outline:none;
    transition:all 0.2s ease-in;

    :focus{
        border-color: royalblue;
    }
`;

export default StyledSelect;