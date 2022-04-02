import styled from 'styled-components'


export const Container = styled.div`
    background: #2d0c5d;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 768px) {
        display: flex;
        width:100%;
        height:70%;

    }

`

export const ContainerLogo = styled.div`
    height:6vh;
    background:rgb(92, 22, 197) ;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 667px) {
        width:100vw;
        height:1%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }


    
`

export const Logo = styled.div`
    margin:0px 30px 0px ;
    
    h1{
        color:#ffff;
        letter-spacing: 3px;
    }
`

export const ContainerText = styled.div`
    width:100%;
    margin: 60px 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 667px) {
        margin: 90px 10px 0px;
        width:100vw;
        display: flex;
        align-items: flex-start;
        align-content: center;
        justify-content: space-between;
    }

`
export const Text = styled.div`
    width:60%;

    h1{
        text-align: center;
        color:#ffff;
        font-size:40px;
    }
    @media (max-width: 667px) {
        width:75vw;
        display: flex;
        margin: -60px 10px 0px;
        h1{
        text-align:left;
        color:#ffff;
        font-size:22.9px;
        }
    }

`

export const ContainerFilter = styled.div`
    width:100%;
    height:40vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 667px) {
        width:100vw;
        display: flex;
        align-items: flex-start;
        align-content: center;
        justify-content: space-between;
    }
`

export const Filter = styled.div`
p{
    color:#ffff;
}

@media (max-width: 667px) {
    width:75vw;
    display: flex;
    margin: -5px 10px 0px;
    p{
        font-size:14px;
        text-align:left;
        color:#ffff;
    }
}

`