import React from 'react';
import client1 from '../assests/image/content.png';
import styled from 'styled-components/macro';
import '../index.css';

const Main = styled.div`
 background-color: #000;
`;

const MainContent = styled.div`
 width: 100%;
 display: block;
 max-width: 1100px; 
 grid-gap: 8px;
 margin: 0 auto;
 color: #fff;
 padding: 40px 45px;

@media screen and (max-width: 728px) {
    {
        display:block;
        padding:15px 45px;
    }
}
h3{
    text-align: center;
    font-weight: bold;
}

p{
    margin-top:35px;
    margin-bottom: 0px;
    text-align:justify;
    
}

img{
    
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

    @media screen and (max-width: 728px) {
    {
        margin:0px;
        width: 100%;
    }
}
}   
`;

const About = () => {
    return (
        <>
            <Main>
                <MainContent>
                    <div>
                        <h3>About US</h3>
                        <h3>Passion, Perseverance and an uncompromising commitment to Perfection. This is what makes Tetsuuma.</h3>
                        <img src={client1} width="300" height="200" alt="Natural" />
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                    </div>
                </MainContent>
            </Main>
        </>
    )
}

export default About;
