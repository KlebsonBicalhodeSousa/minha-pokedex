import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import { GlobalStateContext } from "./GlobalContex";

const GlobalState = ({children}) => {
  const [pokemonNames, setPokemonNames] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  // console.log(pokemons)

  useEffect(() => {
    getPokemonNames()
  }, [])
  useEffect(() => {
    const newList = []
    pokemonNames.forEach((item) => {
      axios.get(item.url)
      .then((res) => {
        newList.push(res.data)
        if(newList.length === 30) {
          const orderList = newList.sort((a, b) =>{            
              return a.id - b.id;           
          })
          setPokemons(orderList)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
    })
  }, [pokemonNames])

  const getPokemonNames = () => {
    axios.get(`${BASE_URL}/pokemon`)
    .then((res)=> {
      setPokemonNames(res.data.results)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
 
  const data = {
    pokedex,
    setPokedex,
    pokemonNames,
    setPokemonNames,
    pokemons,
    setPokemons
  }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
  
  
}

export default GlobalState
