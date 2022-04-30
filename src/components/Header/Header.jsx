import React, { useState, useRef } from 'react';
import { MenuData } from '../../data/MenuData';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks } from './Header.styles';
import logo from "../../assests/image/logo.png";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Header = ({ toggle }) => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY > 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div id="myHeaderDiv">
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'} >
                <Logo to='/'><img src={logo} alt="logo"></img></Logo>
                <MenuBars onClick={toggle} />
                <NavMenu >
                    {MenuData.map((item, index) => {
                        return (
                            <NavMenuLinks to={item.link} key={index}>
                                {item.title}
                            </NavMenuLinks>
                        );
                    })
                    }
                </NavMenu>
            </Nav>

        </div>
    )
}

export default Header;