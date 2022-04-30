
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


const DropdownContainer = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#ea5e35;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.5s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`;
const CloseIcon = styled(FaTimes)``;
const DropdownWrapper = styled.div``;
const DropDwonMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and(max - width: 480px){
    grid-template-rows: repeat(5, 60px);
}
`;
const DropDownLinks = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color:#fff;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration:none;

&: hover{
    color:#000;
}
`;

export { DropDownLinks, DropDwonMenu, DropdownContainer, DropdownWrapper, Icon, CloseIcon };