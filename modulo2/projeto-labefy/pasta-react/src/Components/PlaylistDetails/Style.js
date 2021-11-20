import styled from 'styled-components'

export const Container = styled.div`
margin-top:40px;
text-align: center;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`
export const CardList = styled.div`
display: grid;
justify-content: center;
justify-items: center;
margin: 5px;
`

export const Botao = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
`

export const B = styled.li`
/* border: 1px solid green; */
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
cursor: pointer;
text-align: justify;
list-style-type:none;
font-size: 20px;
margin:10px 0px 0px;
`
export const Musica =styled.div`
width:50vw;
justify-content: space-between;
margin:5px 100px 5px;
font-size: calc(10px + 2vmin);
display: flex;
align-items: center;
flex-direction: column;

audio{
    height: 20px ;
}

`
export const Button2 = styled.button`
    margin: 0 20px 0;
    border-radius: 12px;
    padding: 1px 5px;
    border: none;
    background: red;
    color: #C6EBBE;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
    box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
    :hover{
        background: #5CF64A;
        color: #282C34;
    }
`