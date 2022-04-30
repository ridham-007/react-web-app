import styled from 'styled-components';

const Section = styled.section`
width:100%;
height:100%;
padding:1rem 0rem;
background-color: #000000;

@media screen and  (max-width:768px){
    padding: 1.5rem 0rem;
}

h2{
    color:#f7f7f7;
    text-align:center;
    margin: 30px 0px;
}
`;

// const Container = styled.div`
// display:grid;
// grid-template-columns:1fr;
// grid-template-rows:650px;

// @media screen and  (max-width:767px){
//     grid-template-columns:1fr;
//     padding: 0px;
//     grid-template-rows:300px;
// }
// `;

const ColumnRight = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:0rem 1rem;

@media screen and  (max-width:768px){
   padding: 1rem 1rem;
}

img{
    width:100%;
    height:auto;
    object-fit:cover;

    @media screen and  (max-width:768px){
    width:100%;
    height:auto;
}
}



`;

export { Section, ColumnRight }