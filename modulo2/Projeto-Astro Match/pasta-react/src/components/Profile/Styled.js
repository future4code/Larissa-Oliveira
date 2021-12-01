import styled from 'styled-components'

export const PhotoContainer = styled.div `
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 390px;
    margin: 0 auto;
    box-shadow: 0px 0px 5px 0px #0e3842;
    
    img {
        width: 95%;
        height: 95%;
    }
`

export const InfoContainer = styled.div`
    position: absolute;
    bottom: 0px;
    left: 5%;
    color: #fff;
    h2{
        text-shadow: 
                1px 0px 0px black;
        font-display: 30px;
        font-size: 30px;
        /* margin: 5px; */
    }
    p {
        font-size: 18px;
        text-shadow:1px 0px 0px black;
        /* margin: 5px; */
    }
`