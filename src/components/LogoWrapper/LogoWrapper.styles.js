import styled from 'styled-components/macro';

const GalleryContainer = styled.div`
   background: #e5e5e5;
   padding: 60px 0px 60px 0px;

   @media screen and (max-width: 480px) {
        padding: 100px 40px 40px 40px;
    
   }

`;

const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8px;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 480px) {
    
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 25px;
    }
    @media screen and (min-width: 649px) {
    
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 25px;
    }
    @media screen and (min-width: 900px) {
    
        grid-template-columns: repeat(5, 1fr);
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    justify-content: center;
    max-width: 400px;
    overflow: hidden;
    margin: 0 auto;

    img{
    width: 100px;
    height: 100px;
    transition: 0.5s all ease-in-out;
    margin-bottom: 20px;

    @media screen and (min-width: 480px) {
    img {
        max-width: 600px;
        width: 100px;
        height: 100px;
    }
    }
}
    p{
        color:#0b0c10;
        padding:0 30px;
    }

`;

export { GalleryContainer, GalleryGrid, ImageContainer };