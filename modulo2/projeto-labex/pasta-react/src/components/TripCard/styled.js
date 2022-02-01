import styled from 'styled-components'

export const Cards =styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, ));
  gap: 1rem;
  margin: 0.5rem 0vw 10px;
  padding: 5px;
  list-style-type: none;
  justify-items: center;
`

export const Card = styled.div `
margin: 0.5rem 0vw 10px;
  position: relative;
  display: block;
  width: 80%;
  /* height: 100%;   */
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  cursor: pointer;
    h2 {
		position: absolute;
		top: 0px;
		left: 4%;
		width: 100%;
		height: 100%;
		z-index: 1;
    }
		
    h3{
		padding: 1.5em 1em 2em;
    }
    p{
        font-size: 17px;
        padding: 0em 1em 2em;
        margin: 0;
        color: black;
        font-family: "MockFlowFont";   
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
    }
img {
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
}

`
export const Overlay = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	position: absolute;
	width: 100%;
	top: 0;
    /* background-color: turquoise; */
	transition: transform 500ms;
	/* background-color: lighten(turquoise, 15%); */
  background: rgb(33,189,253);
background: linear-gradient(180deg, rgba(33,189,253,1) 0%, rgba(143,33,253,1) 24%, rgba(183,33,255,1) 49%, rgba(166,75,244,1) 100%);
	transform: translate3d(0, calc(100% - 3.5rem), 0);
    
    :hover{
            transform: translate3d(0, 0, 0)
            
        }
    :focus{
		        transform: translate3d(0, 0, 0);
		    }
  
`
export const Header = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(var(--curve) * 1px) 0 0 0;    
    background-color: var(--surface-color);
    transform: translateY(-100%);
    transition: .2s ease-in-out;
    
    

    :hover{
    transform: translateY(0);
  }
`
export const Status = styled.span`
    font-size: .8em;
    color: #D7BDCA;
` 




export const P = styled.div`
	flex-grow: 1;
	padding: 1rem;
	
	
		margin: 0;
	
`