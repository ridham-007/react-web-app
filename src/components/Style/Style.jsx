import React from 'react';
import { HeroSection, HeroWrapper, HeroImage, HeroContent } from './Style.styles';

const Style = () => {

    return (
        <HeroSection>
            <HeroWrapper>
                <HeroImage />
                <HeroContent>
                    <h1>Your e-Bike. Your Style.</h1>
                    <p>Choose from 4 x Frame Colors</p>
                </HeroContent>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Style;


