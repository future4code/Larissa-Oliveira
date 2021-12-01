import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

export const MainContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 10px 5px 5px gray;
`

export const useStyles = makeStyles(() => ({
    root: {
        width: 370,
        marginTop: 30,
        height: 550,
        border: 0 ,
        position: 'relative',
    },
}));


export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 24%;
    button {
        color: #F00;
        font-size: 30px;
        margin-right:70px;
        width: 60px;
        height: 60px;
        border-radius: 25%;
        border: 1px solid #F00;
        cursor: pointer;
        transition: background 900ms;
            :hover {
                background-color: #F00;
                color: #FFF;
            }
    }
    button:nth-child(2){
        color: #0F0;
        border: 1px solid #0F0;
            :hover {
                background-color: #0F0;
                color: #FFF;
            }
    }
`