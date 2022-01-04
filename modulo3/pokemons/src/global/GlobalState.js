import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        getPokemonNames();
    }, []);

    useEffect(() => {
        const newList = [];
        pokemonNames.forEach((item) => {
            axios
                .get(`${BASE_URL}/pokemon/${item.name}`)
                .then((response) => {
                    newList.push(response.data);
                    if (newList.length === 20) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id;
                        });
                        setPokemons(orderedList);
                    }
                })
                .catch((error) => console.log(error.message));
        });
    }, [pokemonNames]);

    const getPokemonNames = () => {
        axios
            .get(`${BASE_URL}/pokemon?limit=20`)
            .then((response) => {
                setPokemonNames(response.data.results);
            })
            .catch((error) => console.log(error.message));
    };

    const data = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex
    };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;