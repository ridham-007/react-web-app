import React, { useLayoutEffect, useState } from 'react';
import VideoPlayer from "react-background-video-player";
import "./VideoContainer.css"
import { VideoWrapper, InsideContainer, MainHeadingDesktop, SubHeadingDesktop, InsideContainerContentDesktop, InsideContainerContentMobile, MainHeadingMobile, SubHeadingMobile, Button } from './VideoContainer.styles';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


const VideoContainer = () => {

    const [width, height] = useWindowSize();
    console.log(width, height);

    return (
        <VideoWrapper>
            <VideoPlayer
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                className="video"
                src={require('../../assests/video/v3.mp4')}
                autoPlay={true}
                muted={true}
            />

            {(width > 425) ? (
                <InsideContainer>
                    <InsideContainerContentDesktop>
                        <MainHeadingDesktop>
                            The Future of e-Bikes. Now!
                        </MainHeadingDesktop>
                        <SubHeadingDesktop>Introducing e-Stallion by Tetsuuma</SubHeadingDesktop>
                        <Button to='/' primary='true'>Order Now</Button>
                    </InsideContainerContentDesktop>
                </InsideContainer>) :

                (<InsideContainerContentMobile>
                    <MainHeadingMobile>
                        The Future of e-Bikes. Now!
                    </MainHeadingMobile>
                    <SubHeadingMobile>Introducing e-Stallion by Tetsuuma</SubHeadingMobile>
                    <Button to='/' primary='false'>Order Now</Button>
                </InsideContainerContentMobile>)}

        </VideoWrapper>
    )
}

export default VideoContainer;
