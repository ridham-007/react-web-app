import React, { useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../index.css';
import { photo } from "./photo";
import { ImageContainer } from "./LogoWrapper.styles";
import AOS from 'aos';
import "aos/dist/aos.css";


const LogoWrapper = (props) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            paritialVisibilityGutter: 0
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            paritialVisibilityGutter: 0
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 0
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div data-aos="fade-up">
                <Carousel
                    className="carousel"
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

export default LogoWrapper;