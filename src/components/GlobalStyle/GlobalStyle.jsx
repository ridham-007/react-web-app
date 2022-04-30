import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Rotobo', sans-serif;
    }

    html , body {
        overflow-x:hidden;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family:'Rotobo', sans-serif;
        position: relative;
        color: #cfcfcf;
    }

    h3{
        font-size:18px;
    }
    p{
        font-size:14px;
    }
`;

export default GlobalStyle;


export const Container = styled.div`
margin: 0 auto;
padding: 0 50px;
max-width: 1300px;
width: 100%;

@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}

@media (min-width: 1500px) {
    max-width: 1500px;
}

@media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
}
`;