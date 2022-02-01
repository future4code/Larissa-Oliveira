import React ,{useState, useEffect}from 'react';
import {List, ItemProfile, ButtonClear} from './Styled'
import {clearMatches, getMatches} from '../Api/Api'

export default function ListMatch() {
    const [listMatch, setListMatch] = useState([])

    useEffect(()=>{
        handleListMatch()
    },[])

    const handleListMatch = () => {
        getMatches(setListMatch)
    }

    const clearMatch = () => {
        clearMatches()
        handleListMatch()
    }

    return (
        <>
            <List>
                {listMatch.map((profile)=>{
                    return(
                        <ItemProfile key={profile.id}>
                            <img src={profile.photo} alt={profile.photo} />
                            <p>{profile.name}</p>
                        </ItemProfile>
                    )
                })}
            </List>
            <ButtonClear onClick={clearMatch}>Limpar</ButtonClear>
        </>
    );
}