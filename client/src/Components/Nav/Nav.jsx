import React from 'react'
import {Link } from "react-router-dom"
import styles from "./Nav.module.css"

function Nav() {
  return (
    <div className={styles.container}>
      <Link className={styles.button} to={`/Home`}>Home</Link>
      <Link className={styles.button} to={`/createPokemon`}>Create Pokemon</Link>
    </div>
  )
}

export default Nav