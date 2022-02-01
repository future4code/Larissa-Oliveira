import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { CardFooter, ContentCardPost, Status, Up, Down, Comments} from './Styled'


const RecipeCard = (props) => {
  const history = useHistory()
    return (
<ContentCardPost >
        <Card onClick={props.onClick} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={"secondary"} gutterBottom>
        {props.username}
        </Typography>
        <Typography variant="h5" component="div">
        {props.title.toUpperCase()}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.body}
        </Typography>
        <Typography variant="body2">
        {props.text}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <CardFooter>
                   <Status>
                       <Up onClick={props.clickUp} select={props.userVoteDirection}>🠭</Up>
                           <p>{props.votesCount}</p>
                       <Down onClick={props.clickDown} select={props.userVoteDirection}>🠯</Down>
                   </Status>
                   <Comments>
                       <span>{props.commentsCount}</span> 
                       {/* <p onClick={()=>(history, id)}>Comentários</p> */}
                   </Comments>
               </CardFooter>
    </ContentCardPost>
    )
}
export default RecipeCard