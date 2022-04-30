import React, { useEffect } from "react";
import { Section, Container, ColumnLeft, ColumnRight, Button } from "./Content.styles";
import AOS from 'aos';
import "aos/dist/aos.css";


const Content = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        });
        AOS.refresh();
    }, []);

    return (
        <Section>
            <Container>
                <ColumnLeft data-aos="fade-up" >
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse} data-aos="zoom-in-left">
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Content;

