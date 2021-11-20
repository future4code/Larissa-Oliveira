import styled from 'styled-components'

export const Titulo = styled.div`
    margin: 10px;
    display: grid;
    justify-content: space-around;
    align-items: center;

`

export const Div = styled.div`

h2{
  font-size: calc(50px + 2vmin);
  color: #C6EBBE;
}
 
`

export const Button = styled.button`
  margin: 0 20px 0;
  display: flex;
  border-radius: 12px;
  padding: 1% 5%;
  border: none;
  background: #7CA5B8;
  color: #C6EBBE;
  -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
  box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
  :hover{
    background: #5CF64A;
    color: #282C34;
  }
`
export const Button2 = styled.button`
  display: flex;
  border-radius: 12px;
  padding: 1% 5%;
    border: none;
    background: #7CA5B8;
color: #C6EBBE;
-webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
:hover{
    background: #5CF64A;
    color: #282C34;
}
`

export const Inputs = styled.input`

  border: 1px solid #EAD5E6;
  border-radius: 15px;
  margin-left: 10px;
  background: #F3E0EC;
  ::placeholder{
    color:#282C34;
    text-align:center
}
`

export const ContainerCard = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-around;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: none;
  align-items: none;
  font-size: calc(10px + 2vmin);
  color: white; 
`

