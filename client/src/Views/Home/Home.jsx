import React from 'react'
import SearchPokemon from '../../Components/SearchPokemon/SearchPokemon'
import PagesList from '../../Components/PagesList/PagesList'
import Filters from '../../Components/Filters/Filters'
import styles from './Home.module.css'




function Home() {

  return (
    <div data-testid="home-container" className={styles.container}>
      <div className={styles.containerSearchFilter}>
        <div className={styles.containerSearch}>
          <SearchPokemon/>
        </div>
        <div className={styles.containerFilter}>
          <Filters/>
        </div>
      </div>
      <div ><PagesList/></div>
    </div>
  )
}

export default Home






