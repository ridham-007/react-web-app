
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const VideoWrapper = styled.div`
    position: relative;
    
`;

const InsideContainer = styled.div`
    position: absolute;
    width: 468px;
    border: 3px solid rgba(0,0,0,0);
    text-align: center;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%, -100%);
    -ms-transform: translate(-50%, -100%);
    -moz-transform: translate(-50%, -100%);
    -o-transform: translate(-50%, -100%);
    background: rgba(0, 0, 0, 0.1);
`;

const InsideContainerContentDesktop = styled.div`
    display: inline-block;
    padding: 15px;
`;

const InsideContainerContentMobile = styled.div`
    display: block !important;
    background: #000000;
    text-align: center; 

    @media screen and (max-width: 740px) {
        padding: 15px;        
    
   }
`;

const MainHeadingDesktop = styled.div`
    font-size: 31px;
    font-weight: bold;
    color: #ea5e35;
`;

const MainHeadingMobile = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #f7f7f7;
`;

const SubHeadingDesktop = styled.div`
    font-size: 19px;
    line-height: 19px;
    color: #ea5e35;
`;

const SubHeadingMobile = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #f7f7f7;
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
color:${({ primary }) => (primary ? '#fff' : '#000')};
font-size:${({ big }) => (big ? '20px' : '14px')};
margin-top: 20px;
margin-bottom: 10px;
display: inline-block;
margin-right: 10px;

&:hover{
    transform: translateY(-2px);
    background: #ea5e35;
    color: #ffffff;
}
`;

export { VideoWrapper, InsideContainer, InsideContainerContentDesktop, InsideContainerContentMobile, MainHeadingDesktop, SubHeadingDesktop, MainHeadingMobile, SubHeadingMobile, Button };