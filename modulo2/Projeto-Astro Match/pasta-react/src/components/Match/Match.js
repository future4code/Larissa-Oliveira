
import React from 'react';
import {useStyles, MainContainer} from './Styled'
import Card from '@material-ui/core/Card';
import ListMatch from '../MatchList/MatchList' 
import Header from '..//Header/Header'

export default function Match(props) {

    


	const classes = useStyles();
	return (
		<MainContainer>
		<Card className={classes.root}>
			<Header 
				switchPages={props.switchPages} 
				myPage={props.myPage}
			/>
			<ListMatch/>
		</Card>
		</MainContainer>
	);
}