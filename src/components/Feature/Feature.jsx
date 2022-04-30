import React from "react";
import { Section, ColumnRight } from "./Feature.styles";


const Feature = ({ heading, image }) => {
    return (
        <Section>
            <h2>{heading}</h2>
            <ColumnRight>
                <img src={image} alt='home' width="630" height="420" />
            </ColumnRight>

        </Section>
    )
}

export default Feature;

