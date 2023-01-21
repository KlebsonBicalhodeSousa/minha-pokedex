import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalStateContext } from "../../global/GlobalContex";
import { goToPokemonDetail } from "../../routes/coordinator";
import { ButtonCaptureRemove, ButtonDetail, CardButton, CardPokemon, ImageContainer, ImgPokemon } from "./styled";

const PokemonCard = ({pokemon, isPokedex} ) => {
    const navigate = useNavigate()
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)
    // console.log(pokemon)
    const addToPokedex = () => {
        const pokemonIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokemonList = [...pokemons]
        newPokemonList.splice(pokemonIndex, 1)
        const orderPokemonList = newPokemonList.sort((a, b) =>{            
            return a.id - b.id;           
          })

        const newPokedexList = [...pokedex, pokemon]
        const orderPokedex = newPokedexList.sort((a, b) =>{            
            return a.id - b.id;           
          })

        setPokedex(orderPokedex)
        setPokemons(orderPokemonList)
    }

    const removeToPokedex = () => {
        const pokemonIndex = pokedex.findIndex((item) => item.name === pokemon.name)
        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokemonIndex, 1)
        const orderPokedex = newPokedexList.sort((a, b) =>{            
            return a.id - b.id;           
          })

        const newPokemonList = [...pokemons, pokemon]
        const orderPokemonList = newPokemonList.sort((a, b) =>{            
            return a.id - b.id;           
          })

        setPokedex(orderPokedex)
        setPokemons(orderPokemonList)

    }
    return(
        <CardPokemon>
            <ImageContainer>
                <ImgPokemon 
                    src={pokemon.sprites && pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </ImageContainer>
            <CardButton>
                <ButtonCaptureRemove onClick={isPokedex ? removeToPokedex : addToPokedex}>
                    {isPokedex ? 'Remover Pokémon' : 'Adicona a Pokédex'}
                </ButtonCaptureRemove>
                <ButtonDetail onClick={() => goToPokemonDetail(navigate, pokemon.name)}>
                    Ver Detalhe
                </ButtonDetail>
            </CardButton>
        </CardPokemon>
    )
}

export default PokemonCard