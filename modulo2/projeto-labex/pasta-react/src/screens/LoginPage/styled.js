import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* padding: 15px; */
    /* background: #f2f2f2; */
`
export const Wrap = styled.div`
    width: 390px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    h2{
        display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    }
    input{
        font-family: Poppins-Regular;
    font-size: 15px;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: 0 0;
    padding: 0 5px;
    }

`

export const CButton = styled.div`
display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 13px;

        
        button{
        cursor: pointer;
        font-family: Poppins-Medium;
        font-size: 15px;
        color: #fff;
        line-height: 1.2;
        text-transform: uppercase;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 50px;
        background: #a64bf4;
background: -webkit-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
background: -o-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
background: -moz-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
background: linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
    }
`
export const Button = styled.div`
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
    
 


`
export const Form = styled.div`
position: absolute;
z-index: -1;
width: 300%;
height: 100%;
background: #a64bf4;
background: -webkit-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
background: -o-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
background: -moz-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
background: linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
top: 0;
left: -100%;
-webkit-transition: all .4s;
-o-transition: all .4s;
-moz-transition: all .4s;
transition: all .4s;
`

