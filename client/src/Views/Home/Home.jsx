import React from 'react'
import SearchPokemon from '../../Components/SearchPokemon/SearchPokemon'
import { useSelector } from 'react-redux'
import PagesList from '../../Components/PagesList/PagesList'
import Filters from '../../Components/Filters/Filters'



function Home() {

  const copyAllPokemons = useSelector(state=>state.copyAllPokemons)
  


  return (
    <div>
      <div>
        <div><SearchPokemon/></div>
        <div><Filters/></div>
      </div>

      <div><PagesList/></div>

    </div>
  )
}

export default Home






