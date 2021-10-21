import styled from "styled-components"



export const Container = styled.div`
background: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
background-size: cover;

height: 100%;
min-height: 100vh;
`

export const Div2 = styled.div`
padding-bottom: 12px;
display: flex;
flex-direction: column;

`

export const Imagem = styled.img`
padding-top: 30px ;
padding-bottom: 25px;
`

export const H1 = styled.h1`

font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;

padding-bottom: 76px;

color: #FFFFFF;
`

export const P = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;

color: #EEEEEE;

padding-left: 20px;
margin-bottom: 3px;
`

export const Inputs = styled.input`
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

margin-bottom: 64px;

border: none;
outline: none;

font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

padding-left: 15px;

color: #FFFFFF;

`

export const Button = styled.button`
background: #D93856;
border: none;

width: 342px;
height: 68px;

outline: none;

color: #FFFFFF;


font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
cursor: pointer;


text-decoration: none;
display: flex;
justify-content: center;
align-items: center;

&:hover{
    opacity: 0.7;
}

&:active{
    opacity: 0.4;
}
`
