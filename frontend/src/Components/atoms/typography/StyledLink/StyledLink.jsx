import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-family:${({theme})=> theme.fonts.montserrat.name};
    color:black;
    font-size:1.2em;
    margin:${({margins}) => margins ? margins : 0 };
`

export default StyledLink;