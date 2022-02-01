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
		marginTop: 0,
		height: 540,
		position: 'relative',
		border: 1 
	},
}));

