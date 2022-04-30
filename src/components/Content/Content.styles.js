import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Section = styled.section`
width:100%;
height:100%;
padding:10px 0px;
background-color: #000000;

@media screen and  (max-width:768px){
    padding: 1rem;
}
`;

const Container = styled.div`
padding: 0px 100px ;
display:grid;
grid-template-columns:1fr 1fr;

@media screen and  (max-width:767px){
    grid-template-columns:1fr;
    padding: 0px;
}
`;
const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;
order: ${({ reverse }) => (reverse ? '1' : '2')};

h1{
    margin-bottom:1rem;
    font-size:clamp(1.5rem,6vw,2rem);
    color: #f7f7f7;
    font-family: 'Oakes Grotesk';
    font-weight: 700;
    font-size: 20px;
}

p{
    width: 70%;
    margin-bottom:1rem;
    color: #cfcfcf;
    font-size: 14px;
    font-family: 'Oakes Grotesk';
    line-height: 1.6em;

    @media screen and  (max-width:768px){
        width: 100%;
}
}

`;
const ColumnRight = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1')};

@media screen and  (max-width:768px){
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    padding: 0px;
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

const Button = styled(Link)`
background:${({ primary }) => (primary ? '#ea5e35' : 'CD853F')};
white-space:nowrap;
outline:none;
border:none;
min-width:100px;
max-width:200px;
text-decoration:none;
justify-content:center;
align-items:center;
cursor:pointer;
transition:0.3s;
display:flex;
padding:${({ big }) => (big ? '16px 40px' : '12px 22px')};
color:${({ primary }) => (primary ? '#000' : '000d1a')};
font-size:${({ big }) => (big ? '20px' : '14px')};

&:hover{
    transform: translateY(-2px);
    background: #b5b5b5;
    color: #00000;
}
`;

export { Section, Container, ColumnLeft, ColumnRight, Button }