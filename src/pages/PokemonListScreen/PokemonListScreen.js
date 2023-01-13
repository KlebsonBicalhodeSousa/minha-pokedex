import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalContex";
import { MainContainerPokemon } from "./styled";

function PokemonListScreen () {
    const {pokemons} = useContext(GlobalStateContext)
    return(
        <MainContainerPokemon>
            <Header/>
                {
                    pokemons.map((pokemon) => {
                        console.log(pokemon)
                        return <PokemonCard 
                        key={pokemon.name}
                        pokemon={pokemon} 
                        />
                    })
                }
        </MainContainerPokemon>
    )
}

export default PokemonListScreen