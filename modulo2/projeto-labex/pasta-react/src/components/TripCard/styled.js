import styled from 'styled-components'

export const Card = styled.div `
width: 370px;
height: 300px;
background-color: #191923;
margin: 20px;
position: relative;
    h2 {
        color:#191923;
        position: absolute;
        padding: 5px;
        top: 0px;
        left: 0px;
        background-color: rgb(253, 178, 2);
    }
img {
    width: 100%;
    height: 60%;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
}
`
export const Info = styled.div `
width: 100%;
height: 30%;
padding: 5px 10px;
color:#FBFEF9;
`