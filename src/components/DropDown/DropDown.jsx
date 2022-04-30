import React from 'react';
import { MenuDataDrawer } from '../../data/MenuData';
import { DropDwonMenu, DropDownLinks, CloseIcon, DropdownContainer, DropdownWrapper, Icon } from './DropDown.styles';

function DropDown({ isOpen, toggle }) {
    return (
        <>
            <DropdownContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <DropdownWrapper>
                    <DropDwonMenu>
                        {MenuDataDrawer.map((item, index) => {
                            return (
                                <DropDownLinks to={item.link} key={index}>
                                    {item.title}
                                </DropDownLinks>
                            );
                        }
                        )}
                    </DropDwonMenu>
                </DropdownWrapper>
            </DropdownContainer>
        </>

    )
}

export default DropDown;
