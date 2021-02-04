import styled from 'styled-components';

const Button = styled.button`
    background-color:${({theme})=> theme.colors.btnBlue};
    color:white;
    border:none;
    font-size:1.6em;
    padding:10px 30px;
    border-radius:5px;
    margin:${({margins})=> margins ? margins : 'none'};    
    transition: background-color 0.25s ease-in-out;
    cursor:pointer;

    :hover{
        background-color:#6da1e4;
    }
`;

export default Button;