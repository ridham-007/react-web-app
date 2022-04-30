import React, { useEffect } from "react";
import { photo } from "./photo";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageContainer } from "./Client.styles";
import '../../index.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Client = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 0
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 0
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 0
        }
    };

    return (
        <>
            <div data-aos="fade-up">
                <Carousel
                    className="carousel1"
                    ssr
                    partialVisbile
                    responsive={responsive}

                >
                    {photo.map((photo, index) => {
                        return (
                            <>
                                <ImageContainer>
                                    <img src={photo.src} alt={index} />
                                    <p>{photo.content}</p>
                                </ImageContainer>

                            </>
                        )
                    })}

                </Carousel>
            </div>
        </>
    )

}

export default Client;