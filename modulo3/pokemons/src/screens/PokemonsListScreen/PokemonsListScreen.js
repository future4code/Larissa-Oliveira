import React, {useContext} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import GlobalStateContext from '../../global/GlobalStateContext'
import { PokeListContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../routers/coordinator'

const PokemonsListScreen = () => {
    const { pokemons } = useContext(GlobalStateContext);
    // const history = useHistory();

    return (
        <>
            <PokeListContainer>
                {pokemons && pokemons.map ((poke) => {
                    return <PokemonCard key={poke.name} poke={poke} />
                })}
            </PokeListContainer>
        </>
    )
}

export default PokemonsListScreen;