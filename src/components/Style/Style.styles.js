import styled from 'styled-components';
import cycle from "../../assests/image/cyclep.gif";

const HeroSection = styled.section`
height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;

@media (max-width: 768px) {
   height:50vh;
  }
`;

const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;

`;

const HeroImage = styled.div`
background-image: url(${cycle});
background-attachment:fixed;
background-position: center;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
background-size:cover;

@media (max-width: 768px) {
    background-size: cover;
    background-repeat: no-repeat;
  }

`;

const HeroContent = styled.div`
position:relative;
z-index:10;
display:flex;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px); 
color:#fff;
opacity:1;

${`h1{
    font-size: 40px;
    text-align: center;
} `};

@media (max-width: 768px) {
    ${`h1{
        font-size: 30px;
        text-align: center;
    }`}
  }

${`p{
    max-width:1134px;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
} `}

@media (max-width: 768px) {
    ${`p{
        max-width:425px;
        font-size: 15px;
        text-align: center;
    }`}
  }
`;

export { HeroSection, HeroWrapper, HeroContent, HeroImage }