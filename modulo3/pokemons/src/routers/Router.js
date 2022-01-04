import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen/PokemonDetailScreen'
import PokemonsListScreen from '../screens/PokemonsListScreen/PokemonsListScreen'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"
                    component={PokemonsListScreen}
                />
                <Route exact path="/pokemon/:name/:telaPokedex?"
                    component={PokemonDetailScreen}
                />
                <Route exact path="/pokedex"
                    components={PokedexScreen}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;