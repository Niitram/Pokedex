import React, { useState } from 'react'
import SearchPokemon from '../../Components/SearchPokemon/SearchPokemon'
import PagesList from '../../Components/PagesList/PagesList'
import Filters from '../../Components/Filters/Filters'
import styles from './Home.module.css'




function Home() {

  const [currentPage, setCurrentPage] = useState(1);


  return (
    <div data-testid="home-container" className={styles.container}>
      <div className={styles.containerSearchFilter}>
        <div className={styles.containerSearch}>
          <SearchPokemon/>
        </div>
        <div className={styles.containerFilter}>
          <Filters setCurrentPage={setCurrentPage}/>
        </div>
      </div>
      <div ><PagesList currentPage={currentPage} setCurrentPage={setCurrentPage} /></div>
    </div>
  )
}

export default Home






