import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const FormContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

export const Form = styled.form `
    width: 290px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 17px 35px 13px;
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
        border-radius: 5px;
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
        width: 60%;
        height: 50px;
        background: #a64bf4;
        background: -webkit-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
        background: -o-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
        background: -moz-linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
        background: linear-gradient(right,#21d4fd,#b721ff,#21d4fd,#b721ff);
        }
`

export const Label = styled.label `
font-size: 20px;
padding: 5px;
`
export const Select = styled.select `
    width: 100%;
    height: 45px;
`
export const Input = styled.input `
        font-family: Poppins-Regular;
    font-size: 15px;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: 0 0;
    padding: 0 5px;
`
export const Textarea = styled.textarea `
    font-family: Poppins-Regular;
    font-size: 15px;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 80px;
    background: 0 0;
    padding: 0 5px;
    resize: none;
`