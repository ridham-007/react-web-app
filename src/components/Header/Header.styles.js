import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { FaBars } from 'react-icons/fa';


const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-around;
align-items: center;
padding:1rem 2rem;
width:100%; 
background:#000;
z-index: 30;
transition: 0.8s all ease;

@media screen and (max-width: 820px){
    justify-content: space-around ;
    padding: 0px;
}

`;

const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
font-weight:600;
text-decoration:none;
font-size: 14px;

@media screen and (max-width: 820px){
    padding: 0 10px
}

`;

const Logo = styled(Link)`
${NavLink}

`;

const MenuBars = styled(FaBars)`
    display:none;
    height: 30px;
    color: #fff;
    cursor:pointer;

    @media screen and (max-width: 768px){
    display:block;
}
`;

const NavMenu = styled.div`

display:flex;
align-self: center;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink};
box-shadow: inset 0 0 0 0 #ea5e35;
color: #fff ;
transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

&:hover{
  box-shadow: inset 160px 0 0 0 #ea5e35;
  color: #000;
}

`;

export { Nav, Logo, MenuBars, NavMenu, NavLink, NavMenuLinks };
