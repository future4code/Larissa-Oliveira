import React ,{useState, useEffect}from 'react';
import {useStyles, MainContainer} from './Styled';
import Card from '@material-ui/core/Card';
import Buttons from './Buttons';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import {getProfileToChoose, choosePerson} from '../Api/Api';

export default function ProfilePag(props) {
    
    const [profile, setProfile] = useState({})
    
    const classes = useStyles();

    useEffect(()=>{
        handleProfile()
    },[])

    const handleProfile = () => {
        getProfileToChoose(setProfile)
    }

    const choose = () =>{
        choosePerson(profile.id)
        handleProfile()
    }

    return (
        <MainContainer>
        <Card className={classes.root}>
            <Header switchPages={props.switchPages} myPage={props.myPage}/>
                <Profile
                  photo={profile.photo}
                  name={profile.name}
                  age={profile.age}
                  bio={profile.bio}
                  x={profile}
                />
            <Buttons 
                onClickhandleProfile={handleProfile}
                onClickChoose={choose}
            />
        </Card>
        </MainContainer>
    );
}